import React from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap';
import PhotoGallery from './PhotoGallery'


class Landing extends React.Component {
  render() {
    return (
    <div>
      <div>
      <Jumbotron>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Horne's Music Service</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="display-2">Hello there!</h1>
          <h3>
            Our site is curently under construction, but you can get in touch with us using one of the methods below.
          </h3>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
              <h5><strong>Call/Text:</strong> 816-585-3980</h5>
              </Col>
              <Col xs={6} md={4}>
              <h5>
                Email: hornespianoservice@gmail.com
              </h5>
              </Col>
              <Col xs={6} md={4}>
              <h5>
                Facebook: Horne's Piano Service
              </h5>
              </Col>
            </Row>
          </Grid>
      </Jumbotron>
      </div>
      <div>
        <PhotoGallery />
      </div>
    </div>
    )
  }
}

export default Landing;