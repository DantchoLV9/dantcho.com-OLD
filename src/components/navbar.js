import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import styles from "./styling/navbar.module.less"
import BurgerButton from "./navbar/BurgerButton"
import Layout from "./layout"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.navBar = React.createRef()
    this.state = {
      navbarState: false,
      navbarHeight: null,
    }
  }

  componentDidMount() {
    this.setState({ navbarHeight: this.navBar.current.clientHeight })
    console.log(this.state.navbarHeight)
    window.addEventListener("resize", () => this.windowResized())
  }

  windowResized() {
    let windowWidth = window.innerWidth
    if (windowWidth > 576) {
      if (this.state.navbarState) {
        this.setState(prevState => ({
          navbarState: !prevState.navbarState,
        }))
        this.toggleNavbar()
        this.setState(prevState => ({
          navbarState: !prevState.navbarState,
        }))
      }
    }
  }

  toggleNavbar() {
    console.log("Navbar Button Clicked")
    this.setState(prevState => ({
      navbarState: !prevState.navbarState,
    }))
    console.log("This:", this.state.navbarState)
    if (this.state.navbarState) {
      this.props.updateClassNames(styles.contentLeftAnimate)
    } else {
      this.props.updateClassNames(styles.contentRightAnimate)
    }
  }

  render() {
    return (
      <nav ref={this.navBar} id={"navigation-bar"}>
        <div
          className={`${styles.navLinks} ${
            this.state.navbarState ? styles.navActive : ""
          }`}
          style={{ top: `${this.state.navbarHeight}px` }}
        >
          {this.props.pages.map((page, index) => (
            <Link
              key={page.name}
              className={`${styles.navLink} ${styles.navLinkHoverEffect} ${
                this.state.navbarState ? styles.navAnimate : ""
              }`}
              style={{ animationDelay: `${index / 7 + 0.5}s` }}
              to={page.link}
            >
              {page.name}
            </Link>
          ))}
        </div>
        <BurgerButton
          ref={this.BurgerButton}
          navbarState={this.state.navbarState}
          onClick={() => this.toggleNavbar()}
        />
      </nav>
    )
  }
}

/*const Navbar = ( props ) => {

  const [navbarState, setNavbarState] = useState(false)
  const [navHeight, setNavHeight] = useState()
  const ref = useRef(null)

  useEffect(() => {
    let windowResized = () => {
      let windowWidth = window.innerWidth
      if (windowWidth > 576) {
        if (navbarState) {
          toggleNavbar()
        }
      }
    }
    window.addEventListener('resize', windowResized)

    setNavHeight(ref.current.clientHeight)
  }, [])

  let toggleNavbar = () => {
    setNavbarState((navbarState) => !navbarState)
    if (navbarState) {
      props.updateClassNames(styles.contentLeftAnimate)
    }
    else{
      props.updateClassNames(styles.contentRightAnimate)
    }
  }
    
  return (
    <nav ref={ref} id={"navigation-bar"}>
      <div className={`${styles.navLinks} ${navbarState? styles.navActive:""}`} 
      style={{top: `${navHeight}px`}}>
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
}*/

export default Navbar
