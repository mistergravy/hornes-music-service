import React from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Grid, Row, Col, Image, Carousel, Panel, Button } from 'react-bootstrap';

import strings from '../assets/images/strings_nearfocus.jpg';
import hammers from '../assets/images/hammers_closeup.jpg';
import steinway from '../assets/images/steinway_closeup.jpg';
import keybed from '../assets/images/keybed_closeup.jpg';
import logo1 from '../assets/images/rpt01.jpg';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
    <div className="container">
     <Carousel>
       <Carousel.Item>
         <Image  className="carousel-inner" src={strings} />
       </Carousel.Item>
       <Carousel.Item>
         <Image  className="carousel-inner" src={hammers}/>
       </Carousel.Item>
       <Carousel.Item>
         <Image  className="carousel-inner" src={steinway}/>
       </Carousel.Item>
       <Carousel.Item>
         <Image  className="carousel-inner" src={keybed}/>
       </Carousel.Item>
     </Carousel>
    </div>
    )
  }
}

export default PhotoGallery;

