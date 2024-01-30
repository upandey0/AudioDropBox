import React from 'react'
import { GiAbstract012 } from "react-icons/gi";
import { Link } from 'react-router-dom';
import styles from './navigation.module.css'


const Navigation = () => {
    const logoStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'

    }
    const textStyle = {
        marginLeft : '10px'
    }
    return (
        <nav className={`container ${styles.navbar}`}>

            <Link to="/" style={logoStyle}><GiAbstract012 /> 
            <span style={textStyle}>AudioBox</span>
            </Link>

        </nav>
    )
}

export default Navigation
