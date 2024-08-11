import RoomInfoGetter from "../services/RoomsGetter.js";

const RoomsLister = async (req,res)=>{
    const userId = req.query.userId
    const userRoom = new RoomInfoGetter(userId);
    const allRooms = await userRoom.getUserRoomsList()
    return res.status(200).json({allRooms})
}

export default RoomsLister;