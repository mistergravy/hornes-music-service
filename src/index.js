import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import App from '../src/components/App.js';
import PhotoGallery from '../src/components/PhotoGallery.js';

// import '../node_modules/bootswatch/dist/materia/bootstrap.min.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<AppRouter />, document.getElementById('root'))