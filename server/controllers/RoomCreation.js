import Room from '../models/room';
const roomCreation = async (req,res)=>{
    const user = req.user;

    const {name} = req.body;

    try{

        const newRoom = await Room.create({
            name,
            hostId: user.id,
        })

        return res.status(201).json({success:false, message: "Room Created Successfully", data:newRoom})
    } catch(error){

        return res.status(500).json({success: false, message: error.message})

    }
     
}

export default roomCreation;