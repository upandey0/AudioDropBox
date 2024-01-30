import React from 'react'
import Button from '../../../Components/Shared/Button/Button'
import Card from '../../../Components/Shared/Card/Card'

const StepPhoneEmail = ({ handleNextStep }) => {
  return (
    <div>
      <Card title={"Ente Your Phone Number"}>
        <Button title="Proceed" onClick={handleNextStep}></Button>
      </Card>
    </div>
  )
}

export default StepPhoneEmail
