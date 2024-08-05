import User from "../models/user"

class AuthService{
    static async SignUpUser(body){
        
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { username: username }
                ]
            }
        })










        
    }
}