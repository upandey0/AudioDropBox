import React from 'react'
import styles from './button.module.css'
import { WiDirectionRight } from "react-icons/wi";


const Button = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{title}</span>
            <WiDirectionRight/>

        </button>

    )
}

export default Button
