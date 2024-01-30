import React, {useState} from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'

const step = {
    1: StepPhoneEmail,
    2: StepOtp
}
const Authenticate = () => {
    const [steps, setSteps] = useState(1);

    const Steps = step[steps]

    const onNext = ()=>{
        setSteps(steps + 1);
    }
  return (
    <div>
        <Steps handleNextStep = {onNext}/>
    </div>
  )
}

export default Authenticate
