import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.js'

function App(props) {
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
