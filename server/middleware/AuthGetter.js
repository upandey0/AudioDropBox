import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const AuthGetter = async (req, res) => {

    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization token missing or invalid', success: false });
        }

        const actualToken = token.substring(7);
        const userData = await jwt.verify(actualToken, 'your-secret-key');
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

        // console.log(user);

        // console.log(userData)

    } catch (error) {
        return res.json({ message: `Some internal Error Occured`, success: false })
    }

    
}

export default AuthGetter;