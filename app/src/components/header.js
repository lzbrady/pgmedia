import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../components/logo"
import Menu from "../components/menu"

import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Logo style={{ width: "40px" }} />
    <div className={headerStyles.headerContainer}>
      <h1 className={headerStyles.headerTitle}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
