import { Link } from "gatsby"
import React from "react"

import menuIcon from "../../images/svg/menuIcon.svg"

import menuStyle from "../../styles/menu.module.css"

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  render() {
    return (
      <div>
        <button
          className={menuStyle.menu}
          onClick={() => this.setState({ expanded: true })}
        >
          <img src={menuIcon} alt="MENU" className={menuStyle.menuIcon} />
        </button>
        <div
          className={`${menuStyle.menuItems} ${
            this.state.expanded ? menuStyle.menuItemsActive : ""
          }`}
        >
          <h1 className={menuStyle.menuTitle}>Menu</h1>
          <button
            className={menuStyle.menuClose}
            onClick={() => this.setState({ expanded: false })}
          >
            X
          </button>
          <Link to="/" className={menuStyle.menuLink}>
            Home
          </Link>
          <Link to="/websites/" className={menuStyle.menuLink}>
            Websites
          </Link>
          <Link to="/videos/" className={menuStyle.menuLink}>
            Videos
          </Link>
          <Link to="/contact/" className={menuStyle.menuLink}>
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default Menu
