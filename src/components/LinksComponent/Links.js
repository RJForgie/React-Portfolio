import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'

class Links extends Component {
  render() {
    return (
        <div style={{"height" : "200px", "margin-top" : "20px"}}>
          <a href="https://github.com/RJForgie/">GitHub</a>
          <a href="">LinkedIn</a>
        </div>
      );
    }
  }
export default Links;
