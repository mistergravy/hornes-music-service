import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Landing from '../components/Landing.js';
import PhotoGallery from '../components/PhotoGallery.js'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </div>
  </BrowserRouter>

)

export default AppRouter;