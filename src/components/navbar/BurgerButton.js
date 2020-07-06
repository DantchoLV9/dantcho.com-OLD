import React from "react"
import styles from "./navbar.module.less"

const BurgerButton = props => {
  return (
    <button
      className={`${styles.burger} ${props.navbarState ? styles.toggle : ""}`}
      onClick={props.onClick}
    >
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </button>
  )
}

export default BurgerButton
