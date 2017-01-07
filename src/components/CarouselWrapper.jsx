import React, { PropTypes, Component } from 'react';
import Carousel from './Carousel.jsx'
require('../img/ghettogeppetto_carousel.jpg');
require('../img/valyou_carousel.jpg');
require('../img/newsletter_carousel.jpg');
require('../img/ladiesinthehouse_carousel.jpg');
let image1 = require("../img/carousel_test.jpg");

const imageList = [
  {
    url: 'valyou_carousel.jpg',
    heading: 'New Album - 2017',
    linkRef: 'https://youtu.be/msi-viOAK50',
    linkActionText: 'Watch The Trailer',
    isBgLight: false,
  }, {
    url: 'ghettogeppetto_carousel.jpg',
    heading: 'Ghetto Gepetto',
    linkRef: 'https://youtu.be/OWHGUeSEWnU',
    linkActionText: 'Watch Now',
    isBgLight: true,
  }, {
    url: 'ladiesinthehouse_carousel.jpg',
    heading: 'Ladies In The House',
    linkRef: 'https://youtu.be/YqpOmwVCm78?list=PL0FEE485C64979B8A',
    linkActionText: 'Watch Now',
    isBgLight: false,
  }, {
    url: 'newsletter_carousel.jpg',
    heading: 'Join the Mailing List',
    linkRef: 'https://www.google.com',
    linkActionText: 'Click Here',
    isBgLight: false,
    isNewsletterSlide: true,
  }

];

class CarouselWrapper extends Component {
  render() {
    return (
      <Carousel images={imageList} selectedItem={0}>
      </Carousel>
    );
  }
}

export default CarouselWrapper;
