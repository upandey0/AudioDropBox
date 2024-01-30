import React from 'react'
import Button from '../../../Components/Shared/Button/Button'

const StepAvatar = ({handleNextStep}) => {
  return (
    <div>
      Step Avatar
        <Button title="proceed" onClick={handleNextStep}></Button>
    </div>
  )
}

export default StepAvatar
