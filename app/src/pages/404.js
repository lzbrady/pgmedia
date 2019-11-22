import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  componentDidMount() {
    window.location = "/"
  }

  render() {
    return (
      <div>
        <p>Page Not Found :/</p>
      </div>
    )
  }
}

export default NotFoundPage
