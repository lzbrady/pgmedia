import React from "react"
import { Link } from "gatsby"
import ReactPlayer from "react-player"

import Highlights from "../components/highlights/hightlights"
import Layout from "../components/layout"
import SEO from "../components/seo"

import routeStyle from "../styles/route.module.css"
import videoStyle from "../styles/video.module.css"

import IdeaIcon from "../images/icons/light_bulb_icon.png"
import FilmIcon from "../images/icons/video_camera_icon.png"
import EditIcon from "../images/icons/film_icon.png"
import ReleaseIcon from "../images/icons/video_release_icon.png"

const highlightedWork = [
  {
    title: "Music Video",
    desc:
      "Music video for a song titled 'No Chain' by artist 'Aytch'. Wanted to highlight his lack of compromise to fit in to societal norms in a visually appealing manner.",
    imgSrcs: ["no_chain.jpg"],
    videoUrl: "https://www.facebook.com/AytchOfficial/videos/920575978067315/",
  },
  {
    title: "",
    desc: "",
  },
  {
    title: "Music Video",
    desc:
      "Music video for a song titled 'Bless Up' by artist 'Aytch'. With a motif of positivity, Aytch wanted to lift his listeners spirits in this inpsiring video.",
    imgSrcs: ["bless_up.jpg"],
    videoUrl: "https://www.facebook.com/AytchOfficial/videos/1010552459069666/",
  },
]

const Videos = () => (
  <Layout showHeader={true}>
    <SEO title="Websites" />
    <h1 className={routeStyle.header}>Custom Video Production</h1>
    <div
      className={videoStyle.videoContainer}
      style={{
        position: "absolute",
        width: "100%",
        left: "0",
        top: "28vh",
      }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=_1qFPSR193c&amp;t=72s"
        playing={true}
        muted={true}
        width="100%"
        height="68vh"
      />
    </div>
    <div className={videoStyle.videoTextContainer}>
      <p className={routeStyle.subheader}>Custom ads and video production.</p>
      <div className={videoStyle.videoTextLeft}>
        <p>Start with an </p>
      </div>
      <div className={videoStyle.videoTextMiddle}>
        <h1>
          Idea
          <span className={videoStyle.videoIcon}>
            <img src={IdeaIcon} alt="Mobile Friendly" />
          </span>
        </h1>
        <h1>
          <span className={videoStyle.videoIcon}>
            <img src={FilmIcon} alt="Mobile Friendly" />
          </span>
          Filming
        </h1>
        <h1>
          Editing
          <span className={videoStyle.videoIcon}>
            <img src={EditIcon} alt="Mobile Friendly" />
          </span>
        </h1>
        <h1>
          <span className={videoStyle.videoIcon}>
            <img src={ReleaseIcon} alt="Mobile Friendly" />
          </span>
          Release
        </h1>
      </div>
      <div className={videoStyle.videoTextRight}>
        <p> a finished production</p>
      </div>
      <h1 className={videoStyle.videoTitle}>Music Video</h1>
      <p className={videoStyle.videoDesc}>
        Making a music video will reach a larger audience, attracting those more
        drawn to the visual arts. In addition, you help to define your
        personality, which is what your listeners are really following you for.
      </p>
      <h1 className={videoStyle.videoTitle}>Promotional Video</h1>
      <p className={videoStyle.videoDesc}>
        Creating a video will set you apart from your competitors in an
        impactful way. Don't just tell your customers what you can do, show
        them.
      </p>
    </div>
    <Link className={routeStyle.contactUs} to="/contact/">
      Contact Us
    </Link>
    <Highlights highlightedWork={highlightedWork} />
  </Layout>
)

export default Videos
