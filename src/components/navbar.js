import React from "react"
import { Link } from "gatsby"

const Navbar = ( props ) => {
    
  return (
    <nav className={"navigation-bar"}>{props.pages.map(page => (
        <Link key={page.name} className="nav-link nav-element nav-link-hover-effect" to={page.link}>
            {page.name}
        </Link>
    ))}</nav>
  )
}

export default Navbar
