import React from "react"
import { Link } from "gatsby"

import Highlights from "../components/highlights/hightlights"
import Layout from "../components/layout"
import SEO from "../components/seo"

import graphicStyle from "../styles/graphics.module.css"
import routeStyle from "../styles/route.module.css"

const highlightedWork = [
  {
    title: "Logo",
    imgSrcs: ["logo.jpg"],
  },
  {
    title: "Album Art",
    imgSrcs: ["album.png"],
  },
  {
    title: "Flyer",
    imgSrcs: ["brochure.jpg"],
  },
]

const Graphics = () => (
  <Layout showHeader={true}>
    <SEO title="Graphics" />
    <h1 className={routeStyle.header}>Custom Graphic Design</h1>
    <p className={routeStyle.subheader}>
      What can we make? ...anything you want.
    </p>
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1 className={graphicStyle.title}>Headshots</h1>
      <p className={graphicStyle.desc}>
        A good quality, professional headshot sets you apart from your
        competition. If you want to be a professional, you need to look the
        part.
      </p>
      <h1 className={graphicStyle.title}>Logos</h1>
      <p className={graphicStyle.desc}>
        Logos are all about brand recognition. Seeing a logo should not only
        bring the company to mind, but also convey a sense of confidence in your
        brand.
      </p>
      <h1 className={graphicStyle.title}>Album Art</h1>
      <p className={graphicStyle.desc}>
        Before you listener even hears your song, you have a chance to make an
        impression on them. Make the wrong one, and you might just lose that
        listener. Get an album cover as creative as you are.
      </p>
      <h1 className={graphicStyle.title}>Promo Images/Flyers</h1>
      <p className={graphicStyle.desc}>
        They say a picture is worth 1000 words. Tell your audience exactly who
        you are and what you offer with one image.
      </p>
      <h1 className={graphicStyle.title}>Digital Media</h1>
      <p className={graphicStyle.desc}>
        Expand you marketing with digital promotion. A proper looking graphic
        alone can generate a lead.
      </p>
    </div>
    <Link className={routeStyle.contactUs} to="/contact/">
      Contact Us
    </Link>
    <Highlights highlightedWork={highlightedWork} />
  </Layout>
)

export default Graphics
