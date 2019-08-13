import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function renderImage({ file }) {
  return <Img fluid={file.childImageSharp.fluid} />
}

const SocialMediaImage = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "graphics/social_media.png" }) {
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

export default SocialMediaImage
