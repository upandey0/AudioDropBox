import bcryptjs from 'bcryptjs'
import User from '../models/user.js'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'

const Signup = async (req, res) => {
    const { name, email, password, username } = req.body;

    try {
        
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { username: username }
                ]
            }
        })

        if(!name || !email || !password || !username){
            return res.status(404).json({message: "Some required fields are missing", success: false})
        }



        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email or username.' });
        }

        

        const salt = await bcryptjs.genSalt(10); // Adjust the salt rounds as needed

        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = await User.create({
            name: name,
            email: email,
            username: username,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User created successfully.', user: newUser });


    } catch (error) {
        return res.status(500).json({ message: "Interal Error Occurred", success: false })
    }
}

const SignIn = async (req,res)=> {

    const {email,username, password} = req.body;

    if(!email && !password){
        return res.status(404).json({success: false, message: 'Required fields are missing'});
    }

    if(!username && !password)
        return res.status(404).json({success: false, message: 'Required fields are missing'});

    if(!email && !username)
        return res.status(404).json({success: false, message: 'Required fields are missing'});

    let user;
    if(username || email){
        user = await User.findOne({
            where : {
                [Op.or] : [
                    { email : email},
                    {username : username}
                ]
            }
        })
    }

    if(!user){
        return res.status(400).json({success: false, message: "No User Exists"});
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate a token or set session
    const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });

    // Set the token in cookies (or you can send it in the response)
    res.cookie('token', token, { httpOnly: true });

    res.setHeader('Authorization', `Bearer ${token}`);


    // Send response
    return res.status(200).json({ success: true, message: 'Sign in successful', user: { id: user.id, username: user.username, email: user.email } });

}

export {Signup,SignIn};