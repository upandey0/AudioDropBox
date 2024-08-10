import { v4 as uuidv4 } from 'uuid';
import Room from '../models/room.js';
import websocket from 'websocket';
import server from '../index.js'; 

const WebSocketServer = websocket.server;
let websocketServer;

// Function to handle WebSocket requests
const handleWebSocketRequest = (request) => {

  console.log(request.origin)
  const connection = request.accept(null, request.origin);

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      // Handle UTF-8 text messages here
      console.log('Received Message: ' + message.utf8Data);
      connection.sendUTF('Message received: ' + message.utf8Data);
    } else if (message.type === 'binary') {
      // Handle binary messages here
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      connection.sendBytes(message.binaryData);
    }
  });

  connection.on('close', (reasonCode, description) => {
    console.log('Peer ' + connection.remoteAddress + ' disconnected.');
  });
};

const roomCreation = async (req, res) => {
  const user = req.user;
  const { name } = req.body;

  try {
    const newRoom = await Room.create({
      name,
      hostId: user.id,
    });
    const url = uuidv4() + '/' +  newRoom.id;
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
