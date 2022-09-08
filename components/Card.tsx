import styles from '../styles/Card.module.css'
import React from 'react'

interface CardProps{
    children: JSX.Element
}

const Card = ({children}: CardProps) => {
  return (
    <div className={styles.card_body}>
    {children}
    </div>
  )
}

export default Card