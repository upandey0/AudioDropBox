import { v4 as uuidv4 } from 'uuid';
import Room from '../models/room.js';
import websocket from 'websocket';
import server from '../index.js';
import { Sequelize, Op } from 'sequelize';
import UserRoom from '../models/userRoom.js';
import Message from '../models/messages.js';
import User from '../models/user.js';

const WebSocketServer = websocket.server;
let websocketServer;
const rooms = new Map(); // Map to store room connections

// Function to handle WebSocket requests
const handleWebSocketRequest = (request) => {
  const connection = request.accept(null, request.origin);
  const userId = request.resourceURL.query.userId;
  const roomId = request.resourceURL.query.roomId;

  if (!roomId || !userId) {
    connection.close();
    return;
  }

  // Add user to the room
  let user;
  if (!rooms.has(roomId)) {
    const user = User.findByPk(userId)
                  .then((data)=> data)
                  .catch((error)=> {connection.close(); return})
    
    rooms.set(roomId, new Map());
  }

  rooms.get(roomId).set(userId, connection);

  console.log(`User ${userId} connected to room ${roomId}.`);

  // Send a welcome message to the new user
  connection.sendUTF(JSON.stringify({
    type: 'system',
    content: `Welcome to room ${roomId}!`
  }));

  // Broadcast to other users in the room that a new user has joined
  broadcastToRoom(roomId, userId, {
    type: 'system',
    content: `User ${userId} has joined the room.`
  });

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log(`Received Message from ${userId} in room ${roomId}: ${message.utf8Data}`);
      
      // Broadcast message to all users in the same room
      broadcastToRoom(roomId, userId, {
        type: 'chat',
        content: message.utf8Data,
        sender: userId
      });
    } else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      // Handle binary messages if needed
    }
  });

  connection.on('close', (reasonCode, description) => {
    console.log(`User ${userId} disconnected from room ${roomId}.`);
    // Remove user from the room
    rooms.get(roomId).delete(userId);
    // If room is empty, remove it from the rooms map
    if (rooms.get(roomId).size === 0) {
      rooms.delete(roomId);
    } else {
      // Notify other users in the room that this user has left
      broadcastToRoom(roomId, userId, {
        type: 'system',
        content: `User ${userId} has left the room.`
      });
    }
  });
};

// Function to broadcast a message to all users in a room
const broadcastToRoom = async (roomId, senderId, message) => {
  const roomConnections = rooms.get(roomId);
  if(message.type == 'chat'){
    let saveMessage = await Message.create({content : message.content, senderId: senderId, roomId: roomId})
    saveMessage.save()
  }
    
  if (roomConnections) {
    roomConnections.forEach((conn, uid) => {
      if (conn.connected && uid !== senderId) {
        conn.sendUTF(JSON.stringify(message));
      }
    });
  }
};

const roomCreation = async (req, res) => {
  const user = req.user;
  const { name } = req.body;

  try {
    const newRoom = await Room.create({
      name,
      hostId: user.id,
    });
    const userRoom = await UserRoom.create({
      userId : user.id,
      roomId : newRoom.id,
      role: 'host'
    })
    userRoom.save()
    const url = uuidv4() + '/' + newRoom.id;
    return res.status(201).json({ success: true, message: "Room Created Successfully", data: newRoom, url });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const roomParticipation = async (req, res) => {
  // Initialize the WebSocket server if it hasn't been initialized yet
  if (!websocketServer) {
    websocketServer = new WebSocketServer({
      httpServer: server,
      autoAcceptConnections: false,
    });

    websocketServer.on('request', handleWebSocketRequest);
  }

  // Inform the client to establish the WebSocket connection
  return res.status(200).json({ success: true, message: "WebSocket connection can be established" });
};

export { roomCreation, roomParticipation };