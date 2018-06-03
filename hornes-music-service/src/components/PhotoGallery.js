import React from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, Grid, Row, Col, Image, Carousel, Panel} from 'react-bootstrap';

// import strings from './strings_nearfocus.jpg';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (

    <Carousel>
     <Carousel.Item>
     <p>Something here</p>
     </Carousel.Item>
     <Carousel.Item>
       <p>Something else</p>
     </Carousel.Item>
    </Carousel>

    )
  }
}

export default PhotoGallery;

// <Carousel>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src={'strings'} />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>