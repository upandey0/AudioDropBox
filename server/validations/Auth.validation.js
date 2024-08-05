import {body} from "express-validator"

class AuthValidation{

    static SignUpUser =[
        body("name").notEmpty().withMessage("name can not be empty"),
        body("email").isEmail().withMessage("email must be valid"),
        body("password").isLength({min:6}).withMessage("password include min 6 characters").notEmpty().withMessage("password is required")
    ]

    static SignInUser = [
        body("email").isEmail().withMessage("email must be valid"),
        body("password").isLength({min:6}).withMessage("password include min 6 characters").notEmpty().withMessage("password is required")
        
    ]
}
export default AuthValidation ;