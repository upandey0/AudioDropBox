import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const AuthGetter = async (req, res, next) => {

    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization token missing or invalid', success: false });
        }

        const actualToken = token.substring(7);
        const userData = jwt.verify(actualToken, 'your-secret-key');
        const id = userData.id;

        const user = await User.findOne({
            where : {
                  id 
            }
        })

        if(user){
            req.user = user;
            next()
        } else{

            return res.status(401).json({success: false, message: "Unautorized user"})
        }

    } catch (error) {

        return res.status(500).json({ message: error.message, success: false })
    }

    
}

export default AuthGetter;