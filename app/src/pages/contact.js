import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import routeStyle from "../styles/route.module.css"
import contactStyle from "../styles/contact.module.css"

const SocialMedia = () => (
  <Layout showHeader={true}>
    <SEO
      title="Contact"
      keywords={[
        `custom`,
        `website`,
        `graphics`,
        `video`,
        `production`,
        `social`,
        `media`,
        `contact`,
        `indiana`,
        `indianapolis`,
      ]}
    />
    <h1 className={routeStyle.header}>Let's Make Something Great Together</h1>
    <form
      className={contactStyle.contactForm}
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input
        className={contactStyle.contactInput}
        type="hidden"
        name="bot-field"
      />
      <label className={contactStyle.contactLabel} htmlFor="name">
        Name
      </label>
      <input
        className={contactStyle.contactInput}
        type="text"
        name="name"
        id="name"
      />
      <label className={contactStyle.contactLabel} htmlFor="email">
        Email
      </label>
      <input
        className={contactStyle.contactInput}
        type="text"
        name="email"
        id="email"
      />
      <label className={contactStyle.contactLabel} htmlFor="message">
        Message
      </label>
      <textarea
        className={contactStyle.contactTextarea}
        name="message"
        id="message"
        rows="6"
      />
      <input
        className={contactStyle.contactSend}
        type="submit"
        value="Send Message"
      />
    </form>
  </Layout>
)

export default SocialMedia
