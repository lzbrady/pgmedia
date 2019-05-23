import React from "react"
import { Link } from "gatsby"

import Highlights from "../components/highlights/hightlights"
import Layout from "../components/layout"
import SEO from "../components/seo"

import routeStyle from "../styles/route.module.css"

const highlightedWork = [
  {
    title: "Instagram",
    imgSrcs: ["instagram.png"],
  },
  {
    title: "Twitter",
    imgSrcs: ["twitter.jpg"],
  },
  {
    title: "Facebook",
    imgSrcs: ["facebook.png"],
  },
]

const SocialMedia = () => (
  <Layout showHeader={true}>
    <SEO title="Graphics" />
    <h1 className={routeStyle.header}>Social Media</h1>
    <p className={routeStyle.subheader}>
      Increase your online presence with a strong social media game.
    </p>
    <Link className={routeStyle.contactUs} to="/contact/">
      Contact Us
    </Link>
    <Highlights highlightedWork={highlightedWork} />
  </Layout>
)

export default SocialMedia
