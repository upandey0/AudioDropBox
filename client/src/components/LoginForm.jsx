import { useState, useEffect } from "react";
import '../styles/LoginPage.css'
import baseCall from "../api/api";

const LoginForm = (props) => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignIn = async (e)=>{
        e.preventDefault();
        console.log(email)
        console.log(password)
        const response = await baseCall.post('/signin', {
            email : email,
            username: "",
            password: password
        })

        console.log(response.data)
    }
    
    return (
        <>
            <div className='form-parent-container'>
                <div className="child-wrapper">
                    <div className='header-holder'>
                        <h1>{props.purpose}</h1>
                    </div>
                    <div className="input-holder">
                        <div className="boxes-holder">
                            <input className="email" placeholder="Email or Username" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            {
                                props.purpose === 'Signup' ? (<input className="email" placeholder="Username" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>) : null
                            }
                            <input className="password" placeholder="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="button-holder">
                        <button className="button" onClick={handleSignIn}>{props.purpose}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;