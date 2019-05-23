/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, showHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
        <div>
          <main
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
          </main>
          <footer style={{ textAlign: "center", padding: "15px" }}>
            © {new Date().getFullYear()}, Contact
            {` `}
            <a href="mailto:lzbrady496@gmail.com" style={{ color: "white" }}>
              lzbrady496@gmail.com
            </a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
}

Layout.propsDefault = {
  showHeader: true,
}

export default Layout
