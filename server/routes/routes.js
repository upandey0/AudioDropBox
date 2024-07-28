import express from "express";
import {SignIn, Signup} from "../controllers/Authentication.js"
import AuthGetter from "../middleware/AuthGetter.js";
const router = express.Router();


router.post('/signup', Signup);
router.post('/signin',SignIn);
router.get('/token',AuthGetter);

export default router;