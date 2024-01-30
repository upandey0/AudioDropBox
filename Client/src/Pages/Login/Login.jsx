import React, {useState} from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {
    const [step,setStep] = useState(1);
    const Step = steps[step]
    const handleStepClick = ()=>{
        if(step == 1){
            setStep(step + 1);
        }
    }
  return (
    <div>
      <Step handleNextStep = {handleStepClick}/>
    </div>
  )
}

export default Login
