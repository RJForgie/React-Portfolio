import React, { Component } from 'react';
import '../App.css';
import { Bootstrap, Button, Jumbotron, Row, Grid, Col } from 'react-bootstrap';
import HomePage from './HomePage';
import Footer from './FooterComponent/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage/>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default App;
