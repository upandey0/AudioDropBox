import React from 'react'
import Button from '../../../Components/Shared/Button/Button'

const StepName = ({handleNextStep}) => {
  return (
    <div>
        Step Name
          <Button title="proceed" onClick={handleNextStep}></Button>
    </div>
  )
}

export default StepName
