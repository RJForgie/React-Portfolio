import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import profileImage from '../../images/newprofile.JPG'

class Intro extends Component {
  render() {
    return (
      <div>
        <img src={profileImage} alt="My logo" />
        <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
          Cicero in 45 BC</p>
      </div>
    );
  }
}
export default Intro;
