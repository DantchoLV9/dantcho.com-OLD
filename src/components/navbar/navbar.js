import React from "react"
import styles from "./navbar.module.less"
import NavbarLink from "./navbarLink"
import BurgerButton from "./BurgerButton"

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
    window.addEventListener("resize", () => this.windowResized())
  }

  windowResized() {
    let windowWidth = window.innerWidth
    if (windowWidth > 576) {
      if (this.state.navbarState) {
        this.toggleNavbar()
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.navbarState !== this.state.navbarState) {
      this.toggleContent()
    }
  }

  toggleContent() {
    if (!this.state.navbarState) {
      this.props.updateClassNames(styles.contentLeftAnimate)
    } else {
      this.props.updateClassNames(styles.contentRightAnimate)
    }
  }

  toggleNavbar() {
    this.setState(state => ({
      navbarState: !state.navbarState,
    }))
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
            <NavbarLink
              key={page.name}
              page={page}
              index={index}
              navbarState={this.state.navbarState}
              pathName={this.props.pathName}
            />
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

export default Navbar
