import React from "react"
import { Link } from "gatsby"

import Highlights from "../components/highlights/hightlights"
import Layout from "../components/layout"
import SEO from "../components/seo"

import routeStyle from "../styles/route.module.css"
import socialMediaStyle from "../styles/socialmedia.module.css"

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
    <SEO
      title="Custom Social Media"
      keywords={[`custom`, `social`, `media`, `indiana`, `indianapolis`]}
    />
    <h1 className={routeStyle.header}>Social Media</h1>
    <p className={routeStyle.subheader}>
      Increase your online presence with a strong social media game.
    </p>
    <div>
      <div className={socialMediaStyle.centerSection}>
        <h3 className={socialMediaStyle.text}>Every phone has it.</h3>
        <h3 className={socialMediaStyle.text}>Every computer has it.</h3>
        <h3 className={socialMediaStyle.text}>Everybody uses it.</h3>
      </div>

      <p className={socialMediaStyle.text}>
        Get involved in the world of social media that has vastly outgrown a
        youthful trend.
      </p>
      <p className={socialMediaStyle.newSection}>
        A small subset of what is possible through social media:
      </p>
      <ul>
        <li>Network</li>
        <li>Find Leads</li>
        <li>Point of Contact</li>
        <li>Increase Revenue</li>
      </ul>
      <p className={socialMediaStyle.text}>
        Let us help you stop putting it off.
      </p>
    </div>
    <Link className={routeStyle.contactUs} to="/contact/">
      Contact Us
    </Link>
    <Highlights highlightedWork={highlightedWork} />
  </Layout>
)

export default SocialMedia
