import { Switch, Route,  HashRouter } from 'react-router-dom';
import GalleryDetails from './components/GalleryDetails.jsx'
import React, { Component }  from 'react';
import Gallery from './components/Gallery.jsx'

export default class Router extends Component {
  render() {

    return(
      <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={ Gallery}/>
        <Route exact path='/:imageId' component={ GalleryDetails }/>
      </Switch>
      </HashRouter>
    )


  }
}