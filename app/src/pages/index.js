import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Particles from "react-particles-js"

import BackgroundImage from "gatsby-background-image"
import Logo from "../components/logo"
import logo from "../images/svg/logo.svg"

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
              <SEO
                title="PG Media"
                keywords={[
                  `custom`,
                  `website`,
                  `graphics`,
                  `video`,
                  `production`,
                  `social`,
                  `media`,
                  `indiana`,
                  `indianapolis`,
                ]}
              />
              <div className={indexStyles.topContainer}>
                <img
                  src={logo}
                  alt="Pretty Good Media"
                  width="75"
                  height="75"
                />
                <h1 className={indexStyles.title}>
                  Pretty Good
                  <br />
                  <span className={indexStyles.subtitle}>Media Solutions</span>
                </h1>
              </div>
              <Link className={indexStyles.link} to="/websites/">
                Websites
                <span className={indexStyles.arrowHover} />
              </Link>
              <Link className={indexStyles.link} to="/graphics/">
                Graphics
                <span className={indexStyles.arrowHover} />
              </Link>
              <Link className={indexStyles.link} to="/videos/">
                Videos
                <span className={indexStyles.arrowHover} />
              </Link>
              <Link className={indexStyles.link} to="/social-media/">
                Social Media
                <span className={indexStyles.arrowHover} />
              </Link>
              <Link className={indexStyles.link} to="/contact/">
                Contact Us
                <span className={indexStyles.arrowHover} />
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
