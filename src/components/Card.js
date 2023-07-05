import React from 'react'
import  styles from './Card.module.css'


function Card({line1, line2}) {
  return (
    <div className={styles.box}>
      <div className= {styles.line1}>{line1}</div>
      <div className={styles.line2}>{line2}</div>
    </div>
  )
}

export default Card;