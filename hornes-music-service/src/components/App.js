import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.js'

// import Jumbotron from '../node_modules/react-bootstrap/lib/Jumbotron';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Landing />
      </div>
    );
  }
}

export default App;