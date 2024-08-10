import express from "express";
import {SignIn, Signup} from "../controllers/Authentication.js"
import AuthGetter from "../middleware/AuthGetter.js";
import { roomCreation, roomParticipation } from "../controllers/RoomCreation.js";
const router = express.Router();


router.post('/signup', Signup);
router.post('/signin',SignIn);
router.post('/create-room', AuthGetter, roomCreation)
router.post('/participate', AuthGetter, roomParticipation)

export default router;