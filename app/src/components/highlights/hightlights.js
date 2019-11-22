import React from "react"

import Highlight from "./highlight"

import highlightsStyles from "../../styles/highlights.module.css"

class Highlights extends React.Component {
  constructor(props) {
    super()

    this.state = {
      selectedWork: {},
      showDetail: false,
    }

    this.showDetail = this.showDetail.bind(this)
    this.closeDetail = this.closeDetail.bind(this)
  }

  showDetail(selectedWork) {
    if (
      this.state.showDetail &&
      this.state.selectedWork.title === selectedWork.title
    ) {
      this.setState({ showDetail: false, selectedWork: {} })
    } else {
      this.setState({ showDetail: true, selectedWork: selectedWork })
    }
  }

  closeDetail() {
    this.setState({ showDetail: false, selectedWork: {} })
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: "50px auto 0px",
            fontSize: "24px",
            fontWeight: "normal",
          }}
        >
          Highlighted Work
        </h1>
        {this.props.highlightedWork.map(
          (highlight, index) =>
            highlight.title !== "" && (
              <div
                key={index}
                className={highlightsStyles.container}
                onClick={() => this.showDetail(highlight)}
              >
                {highlight.imgSrcs && (
                  <img
                    className={highlightsStyles.thumbnail}
                    src={require(`../../images/graphics/${
                      highlight.imgSrcs[0]
                    }`)}
                    alt={highlight.title}
                  />
                )}
                <div className={highlightsStyles.containerText}>
                  <p className={highlightsStyles.title}>{highlight.title}</p>
                  <p className={highlightsStyles.desc}>{highlight.desc}</p>
                </div>
              </div>
            )
        )}
        {this.state.showDetail && (
          <Highlight
            selectedWork={this.state.selectedWork}
            close={this.closeDetail}
          />
        )}
      </div>
    )
  }
}

export default Highlights
