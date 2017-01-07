import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import klass from '../cssClasses';
import Swipe from 'react-easy-swipe';
require('./Carousel.scss');
let image1 = require('../img/carousel_test.jpg');

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: this.props.selectedItem,
      hasMount: false,
    };
  }

  componentDidMount() {
    this.autoPlay()
  }

  componentWillUnmount() {
    this.clearAutoPlay()
  }

  autoPlay() {
    this.timer = setTimeout(() => {
        this.changeItem(this.state.selectedItem + 1)
        this.autoPlay();
    }, 9000);
  }

  clearAutoPlay() {
      clearTimeout(this.timer);
  }

  increment() {
    this.changeItem(this.state.selectedItem + 1)
  }

  decrement() {
    this.changeItem(this.state.selectedItem - 1)
  }

  changeItem(index) {
    let selectedItem = index;

    if (selectedItem === this.props.images.length) {
      this.setState({selectedItem: 0})
    } else if (selectedItem < 0){
      this.setState({selectedItem: (this.props.images.length - 1)})
    } else {
      this.setState({selectedItem: selectedItem})
    }
  }

  renderItems() {
    return this.props.images.map((image, index) => {
      let url = image.url;
      let heading = image.heading;
      let linkRef = image.linkRef;
      let isNewsletterSlide = image.isNewsletterSlide;
      let linkActionText = image.linkActionText;
      let linkAction;

      if (isNewsletterSlide) {
        linkAction = (
          <form
            className="carousel-newsletter"
            action="//Com.us3.list-manage.com/subscribe/post?u=577b2ce3a1cf8d775613cef1f&amp;id=43764fe891"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank">
            <input
              type="email"
              placeholder="Enter your email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              onMouseEnter={this.clearAutoPlay.bind(this)}
              onMouseLeave={this.autoPlay.bind(this)}
            >
            </input>
            <div
              style={{position: 'absolute', left: -5000 + 'px'}}
              aria-hidden="true">
                <input
                  type="text"
                  name="b_577b2ce3a1cf8d775613cef1f_43764fe891"
                  tabIndex="-1"
                  value="">
                </input>
            </div>
            <input
              type="submit"
              value="Subscribe"
              className="carousel-action">
            </input>
          </form>
        )
      } else {
          linkAction = (
            <a onMouseEnter={this.clearAutoPlay.bind(this)} onMouseLeave={this.autoPlay.bind(this)} className="carousel-action" href={linkRef} target="_blank">{linkActionText}</a>
          )
      }

      return (
        <div key={index} className="carousel fade" style={{backgroundImage: 'url("../img/' + url + '")', display: index === this.state.selectedItem ? "block" : "none"}}>
          <div className="carousel-content">
            <span className="carousel-heading">{heading}</span>
            { linkAction }
          </div>

        </div>
      )
    })
  }

  renderControls () {
    return (
        <ul className="control-dots">
            {this.props.images.map((item, index) => {
                return <li className={ index === this.state.selectedItem ? "dot active" : "dot" } onClick={() => this.changeItem(index)} value={index} key={index} />;
            })}
        </ul>
    );
  }

  render(index) {
    return (
      <div className={ this.props.images[this.state.selectedItem].isBgLight ? "carousel-wrapper dark" : "carousel-wrapper"}>
        {this.renderItems()}
        {this.renderControls()}
        <a className="prev" onMouseEnter={this.clearAutoPlay.bind(this)} onMouseLeave={this.autoPlay.bind(this)} onClick={this.decrement.bind(this)}>&#10094;</a>
        <a className="next" onMouseEnter={this.clearAutoPlay.bind(this)} onMouseLeave={this.autoPlay.bind(this)} onClick={this.increment.bind(this)}>&#10095;</a>
      </div>
    )
  }
}

export default Carousel;

Carousel.defaultProps = {
  selectedItem: 0,
}
