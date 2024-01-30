import React from 'react'
import Button from '../../../Components/Shared/Button/Button'

const StepUserName = ({handleNextStep}) => {
  return (
    <div>
        Step User Name
          <Button title="proceed" onClick={handleNextStep}></Button>
    </div>
  )
}

export default StepUserName
