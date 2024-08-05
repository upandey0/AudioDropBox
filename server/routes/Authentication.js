import express from "express"
import AuthValidation from "../validations/Auth.validation"
import Validation from "../middleware/Validation"

const router = express.Router()

router.post("signup",AuthValidation.SignUpUser,Validation,Authentication)