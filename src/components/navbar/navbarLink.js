import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.less"

const NavbarLink = props => {
  return (
    <Link
      key={props.page.name}
      className={`
        ${styles.navLink} 
        ${styles.navLinkHoverEffect} 
        ${props.navbarState ? styles.navAnimate : ""}
        ${props.page.link === props.pathName ? styles.active : ""}
      `}
      style={{ animationDelay: `${props.index / 7 + 0.5}s` }}
      to={props.page.link}
    >
      {props.page.name}
    </Link>
  )
}

export default NavbarLink
