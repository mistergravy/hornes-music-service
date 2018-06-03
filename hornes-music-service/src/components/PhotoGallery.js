import React from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, Grid, Row, Col, Image, Carousel, Panel, Button} from 'react-bootstrap';

import strings from '../assets/images/strings_nearfocus.jpg';
import hammers from '../assets/images/hammers_closeup.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
   <Carousel>
     <Carousel.Item>
       <Image width={600} height={200} src={strings} thumbnail/>
     </Carousel.Item>
     <Carousel.Item>
       <Image width= {600} height={200} src={hammers} thumbnail/>
     </Carousel.Item>
   </Carousel>
    )
  }
}

export default PhotoGallery;

