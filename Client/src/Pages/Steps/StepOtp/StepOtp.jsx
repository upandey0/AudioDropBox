import React from 'react'
import Button from '../../../Components/Shared/Button/Button'

const StepOtp = ({handleNextStep}) => {
  return (
    <div>
      Step OTP
        <Button title="proceed" onClick={handleNextStep}></Button>
    </div>
  )
}

export default StepOtp
