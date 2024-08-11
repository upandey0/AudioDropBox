import Room from "../models/room.js";
import UserRoom from "../models/userRoom.js";
import { Op } from "sequelize";

class RoomInfoGetter {

    constructor(userId){
        this.userId = userId;
    }

    getUserRoomsList(){
        const userRooms = UserRoom.findAll({
            where : {
                userId : this.userId
            }
        })
        .then((data)=> data)
        .catch(error =>  { throw new Error(`Error fetching user rooms: ${error.message}`) ; })
        //console.log(userRooms)

        return userRooms;
    }



}

export default RoomInfoGetter;