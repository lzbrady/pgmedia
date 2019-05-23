import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "../styles/index.module.css"

const IndexPage = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{
              filter: "grayscale(0.6)",
              height: "100vh",
              width: "100%",
            }}
          >
            <Particles width="100%" height="40vh" />
            <Layout showHeader={false}>
              <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
              <h1 className={indexStyles.title}>
                Pretty Good
                <br />
                <span className={indexStyles.subtitle}>Media Solutions</span>
              </h1>
              <Link className={indexStyles.link} to="/websites/">
                Websites
              </Link>
              <Link className={indexStyles.link} to="/graphics/">
                Graphics
              </Link>
              <Link className={indexStyles.link} to="/videos/">
                Videos
              </Link>
              <Link className={indexStyles.link} to="/social-media/">
                Social Media
              </Link>
              <Link className={indexStyles.link} to="/contact/">
                Contact Us
              </Link>
            </Layout>
          </BackgroundImage>
        )
      }}
    />
    <div className={indexStyles.background} />
  </React.Fragment>
)

export default IndexPage
