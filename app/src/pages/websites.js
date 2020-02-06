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
    title: "Restaurants",
    desc:
      "Show off your cuisine with a graphics heavy website to get the user to get a sense of the type of food you are offering. Display your menu, wine offerings, deserts, and anything else your restaurant offers to set you apart.",
    imgSrcs: [
      "restaurant/home.png",
      "restaurant/about.png",
      "restaurant/menu.png",
      "restaurant/private-events.png",
      "restaurant/contact.png",
    ],
  },
  {
    title: "Weddings",
    desc:
      "Help relieve some of the stress involved in planning a wedding by having a website to answer common questions people have, share helpful resources, and showcase your engagement photos to your families.",
    imgSrcs: [
      "aawebsite/home.png",
      "aawebsite/location.png",
      "aawebsite/registry.png",
      "aawebsite/gallery.png",
    ],
  },
  {
    title: "Musicians",
    desc:
      "Becoming a successful musician involves a lot of promoting yourself and networking. Having a website can centralize your resources, so new contacts have one place where they can hear your music, watch your videos, and keep up with your social media and upcoming events.",
    imgSrcs: ["aytch_home.png", "aytch_music.png", "aytch_social.png"],
  },
  {
    title: "Small Businesses",
    desc:
      "Small businesses rely on creating a network. Having a website for your small business is a great way to get clients and contacts to easily connect with you and see what kind of work your company is capable of producing. Creating a professional website is a great way to set yourself apart from your competition.",
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
