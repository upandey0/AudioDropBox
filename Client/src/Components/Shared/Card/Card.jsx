import React from 'react'
import styles from './card.module.css'
import { GiAbstract012 } from "react-icons/gi";

const Card = ({title,children}) => {
    return (

        <div className={`${styles.card}`}>
            <div className={`${styles.headingWrapper}`}>
                <GiAbstract012 />
                <h1 className={styles.heading}>{title}</h1>
            </div>
            {children}
        </div>

    )
}

export default Card
