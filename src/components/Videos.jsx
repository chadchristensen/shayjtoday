import React, { Component, PropTypes } from 'react';
import Lightbox from './Lightbox/Lightbox';
let videothumb1 = require("../img/videogrid1.jpg");
let videothumb2 = require("../img/videogrid2.jpg");
let videothumb3 = require("../img/videogrid3.jpg");
let videothumb4 = require("../img/videogrid4.jpg");
require("../img/ladiesinthehouse.jpg");
require("../img/pyramids.jpg");
require("../img/valyou.jpg");
require("../img/ghettogeppetto.jpg");
require("../img/wantmenow.jpg");
require("../img/othersidept2.jpg");
require("../img/nycliveperformance.jpg");
require("../img/latenightspecial.jpg");
require("../img/dreamer.jpg");
require("../img/thecure.jpg");
require("../img/thehype.jpg");
require("../img/mommasaid.jpg");
let videoList = [
  { src: "https://www.youtube.com/embed/msi-viOAK50?autoplay=1", title: "val{you}.", thumb: "../img/valyou.jpg" },
  { src: "https://www.youtube.com/embed/OWHGUeSEWnU?autoplay=1", title: "Ghetto Geppetto (Kid With a Dream)", thumb: "../img/ghettogeppetto.jpg" },
  { src: "https://www.youtube.com/embed/YqpOmwVCm78?autoplay=1", title: "Ladies in the House", thumb: "../img/ladiesinthehouse.jpg" },
  { src: "https://www.youtube.com/embed/vUAVZiQgals?autoplay=1", title: "wantmenow", thumb: "../img/wantmenow.jpg" },
  { src: "https://www.youtube.com/embed/jTxLYaEDtqg?autoplay=1", title: "The Otherside II", thumb: "../img/othersidept2.jpg" },
  { src: "https://www.youtube.com/embed/hjX8uJjH6xM?autoplay=1", title: "Pyramids", thumb: "../img/pyramids.jpg" },
  { src: "https://www.youtube.com/embed/bw4cp1pSQUc?autoplay=1", title: "1st Live Performance in NYC", thumb: "../img/nycliveperformance.jpg" },
  { src: "https://www.youtube.com/embed/SnYrKvVYuTM?autoplay=1", title: "Late Night Special (Apple Drank)", thumb: "../img/latenightspecial.jpg" },
  { src: "https://www.youtube.com/embed/pycUQry5Oc8?autoplay=1", title: "Dreamer", thumb: "../img/dreamer.jpg" },
  { src: "https://www.youtube.com/embed/u83hf4L1Zc4?autoplay=1", title: "Momma Said", thumb: "../img/mommasaid.jpg" },
  { src: "https://www.youtube.com/embed/YNNNuXrKknM?autoplay=1", title: "The Hype", thumb: "../img/thehype.jpg" },
  { src: "https://www.youtube.com/embed/AstKBK4fdII?autoplay=1", title: "Hurricane", thumb: videothumb1 },
  { src: "https://www.youtube.com/embed/cl7d17wuVvg?autoplay=1", title: "The Cure", thumb: "../img/thecure.jpg" },
]

class Videos extends Component {

  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

  gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}

  renderVideoGallery() {
    return (
      <ul id="video-grid">
        {videoList.map((video, i) => {
          return (
            <li className="video-thumbnail" key={i}>
              <a href="#"
                 onClick={(e) => this.openLightbox(i, e)}
                 key={i}>
                <img src={video.thumb} />
                <p>{video.title}</p>


                <div className="youtube-play">
                  <i className="fa fa-youtube-play"></i>
                  <div className="youtube-play-bg"></div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="main-content">
        <h2 className="page-title">{this.props.route.title}</h2>
        <div className="container">
          {this.renderVideoGallery()}
          <Lightbox
            backdropClosesModal={true}
  					currentImage={this.state.currentImage}
  					images={videoList}
  					isOpen={this.state.lightboxIsOpen}
  					onClickImage={this.handleClickImage}
  					onClickThumbnail={this.gotoImage}
  					onClose={this.closeLightbox}
  					theme={this.props.theme}
  				/>
        </div>
      </div>
    );
  }
}

export default Videos;
