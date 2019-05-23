import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function renderImage({ file }) {
  return (
    <Img
      fluid={file.childImageSharp.fluid}
      style={{
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "3px",
        left: "3px",
      }}
    />
  )
}

const Logo = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={renderImage}
    />
  )
}

export default Logo
