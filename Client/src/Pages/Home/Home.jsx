import React from 'react'
import styles from './home.module.css'


import { Link, useNavigate } from 'react-router-dom';
import Card from '../../Components/Shared/Card/Card';
import Button from '../../Components/Shared/Button/Button';


const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/register')
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title={`Welcome Here`}>
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone!
          While we wrap up the finishing youches, we’re adding people
          gradually to make sure nothing breaks
        </p>
        <div>
          <Button title="Let's Go" onClick={handleClick} />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>
            Have an invite text?
          </span>
          <Link to='/signin'>Sign In</Link>
        </div>
      </Card>
    </div>
  )
}

export default Home
