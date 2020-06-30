import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./styling/navbar.module.less"

const Navbar = ( props ) => {

  const [navbarState, setNavbarState] = useState(false);

  let windowResized = () => {
    
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    console.log("Height: ", windowHeight, "Width: ", windowWidth)

  }

  let toggleNavbar = () => {
    console.log("Navbar toggle - Activated")
    
    setNavbarState((navbarState) => !navbarState)

  }

  window.addEventListener('resize', windowResized)
    
  return (
    <nav id={"navigation-bar"}>
      <div className={`${styles.navLinks} ${navbarState? styles.navActive:""}`}>
        {props.pages.map((page, index) => (
          <Link key={page.name} className={`${styles.navLink} ${styles.navLinkHoverEffect} ${navbarState? styles.navAnimate:""}`} 
          style={{animationDelay: `${index / 7 + 0.5}s`}} to={page.link}>
              {page.name}
          </Link>
        ))}
      </div>
      <div className={`${styles.burger} ${navbarState? styles.toggle:""}`} onClick={toggleNavbar}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  )
}

export default Navbar
