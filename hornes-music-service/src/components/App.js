import React from 'react';
import ReactDom from 'react-dom';

import {Jumbotron, Button} from 'react-bootstrap';
import PhotoGallery from './PhotoGallery.js';



class App extends React.Component {
  render() {
    return (
    <div className= "App">
      <div>
        <PhotoGallery />
      </div>

    </div>
    )
  }
}

export default App;