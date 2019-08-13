import React from "react"
import { Link } from "gatsby"

import Highlights from "../components/highlights/hightlights"
import Layout from "../components/layout"
import SEO from "../components/seo"

import routeStyle from "../styles/route.module.css"
import websiteStyle from "../styles/website.module.css"

import MagnifyingGlass from "../images/icons/magnifying_glass_icon.png"
import Handshake from "../images/icons/handshake_icon.png"
import Phone from "../images/icons/phone_icon.png"

const highlightedWork = [
  {
    title: "1 a Week",
    desc:
      "Non-profit charity organization promoting good deeds. Looking for a place for elementary school children to post about their good doing. Built in admin portal for managing website content.",
    imgSrcs: [
      "1aweek_home.png",
      "1aweek_admin.png",
      "1aweek_acts.png",
      "1aweek_share.png",
      "1aweek_logo.jpg",
    ],
  },
  {
    title: "Aytch",
    desc:
      "Local Boston musician making hip-hop. Looking for a website to direct traffic to learn about himself, and spread his new music, videos, and upcoming events.",
    imgSrcs: ["aytch_home.png", "aytch_music.png", "aytch_social.png"],
  },
  {
    title: "B&B Home Design and Improvement",
    desc:
      "Connecticut contractor who owns a home improvement business. Looking to increase lead acquisition through SEO, and showcase his work.",
    imgSrcs: ["bb_home.png", "bb_services.png", "bb_testimonials.png"],
  },
]

const Websites = () => (
  <Layout showHeader={true}>
    <SEO
      title="Custom Websites"
      keywords={[`custom`, `website`, `indiana`, `indianapolis`]}
    />
    <h1 className={routeStyle.header}>Custom Website Design and Development</h1>
    <p className={routeStyle.subheader}>
      The internet is complicated. Owning a website doesn't have to be.
    </p>
    <p style={{ margin: "60px auto", textAlign: "center" }}>
      Custom web development. Based out of Indianapolis.
    </p>
    <div className={websiteStyle.featuresWrapper}>
      <div className={websiteStyle.featureContainer}>
        <div className={websiteStyle.iconWrapper}>
          <div className={websiteStyle.iconBorder}>
            <img
              className={websiteStyle.featureIcon}
              src={MagnifyingGlass}
              alt="SEO"
            />
          </div>
        </div>
        <div className={websiteStyle.descWrapper}>
          <p className={websiteStyle.featureTitle}>SEO</p>
          <p className={websiteStyle.featureDesc}>
            Search Engine Optimization is crucial in making sure your users are
            finding you. Users trust their search engine, and we'll make sure
            their search engine recommends you.
          </p>
        </div>
      </div>
      <div className={websiteStyle.featureContainer}>
        <div className={websiteStyle.descWrapper}>
          <p className={websiteStyle.featureTitle}>Lead Generation</p>
          <p className={websiteStyle.featureDesc}>
            Your website should work for you, not just sit around and grow
            cobwebs. We'll help turn your website visitors into leads, so you
            can turn them into customers.
          </p>
        </div>
        <div className={websiteStyle.iconWrapper}>
          <div className={websiteStyle.iconBorder}>
            <img
              className={websiteStyle.featureIcon}
              src={Handshake}
              alt="Lead Generation"
            />
          </div>
        </div>
      </div>
      <div className={websiteStyle.featureContainer}>
        <div className={websiteStyle.iconWrapper}>
          <div className={websiteStyle.iconBorder}>
            <img
              className={websiteStyle.featureIcon}
              src={Phone}
              alt="Mobile Friendly"
            />
          </div>
        </div>
        <div className={websiteStyle.descWrapper}>
          <p className={websiteStyle.featureTitle}>Mobile First</p>
          <p className={websiteStyle.featureDesc}>
            The internet is now mobile first, meaning, users are browsing via
            their phones more than their computers. We'll design your website to
            look good in mobile and desktop.
          </p>
        </div>
      </div>
    </div>
    <Link className={routeStyle.contactUs} to="/contact/">
      Contact Us
    </Link>
    <Highlights highlightedWork={highlightedWork} />
  </Layout>
)

export default Websites
