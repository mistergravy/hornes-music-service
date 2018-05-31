import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import AppRouter from './routers/AppRouter.js'
import '../node_modules/bootswatch/dist/materia/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<AppRouter />, document.getElementById('root'))