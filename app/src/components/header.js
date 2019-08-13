import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logoPG from "../images/svg/logoPG.svg"
import Menu from "./menu/menu"

import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <img src={logoPG} alt="PG" className={headerStyles.headerIcon} />
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
