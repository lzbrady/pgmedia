import React from "react"
import ReactPlayer from "react-player"

import highlightsStyles from "../../styles/highlights.module.css"

class Highlight extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgIndex: 0,
    }
  }

  changeImg(direction) {
    let curIndex = this.state.imgIndex
    let maxSize = this.props.selectedWork.imgSrcs.length

    if (curIndex + direction < 0) {
      curIndex = maxSize - 1
    } else if (curIndex + direction >= maxSize) {
      curIndex = 0
    } else {
      curIndex += direction
    }
    this.setState({ imgIndex: curIndex })
  }

  render() {
    return (
      <div className={highlightsStyles.detailContainer}>
        <p onClick={this.props.close} className={highlightsStyles.detailClose}>X</p>
        <p className={highlightsStyles.detailTitle}>
          {this.props.selectedWork.title}
        </p>
        <p className={highlightsStyles.detailText}>
          {this.props.selectedWork.desc}
        </p>
        {!this.props.selectedWork.videoUrl && this.props.selectedWork.imgSrcs && (
          <div className={highlightsStyles.slideshowContainer}>
            <div className={highlightsStyles.arrowContainer}>
              {this.props.selectedWork.imgSrcs.length > 1 && (
                <div
                  className={highlightsStyles.slideshowLeft}
                  onClick={() => this.changeImg(-1)}
                >
                  &lt; Prev
                </div>
              )}
              {this.props.selectedWork.imgSrcs.length > 1 && (
                <div
                  className={highlightsStyles.slideshowRight}
                  onClick={() => this.changeImg(1)}
                >
                  Next &gt;
                </div>
              )}
            </div>
            <img
              className={highlightsStyles.detailImage}
              src={require(`../../images/graphics/${
                this.props.selectedWork.imgSrcs[this.state.imgIndex]
              }`)}
              alt={this.props.selectedWork.title}
            />
          </div>
        )}
        {this.props.selectedWork.videoUrl && (
          <ReactPlayer
            url={this.props.selectedWork.videoUrl}
            width="100%"
            controls={true}
            style={{ margin: "auto" }}
          />
        )}
      </div>
    )
  }
}

export default Highlight
