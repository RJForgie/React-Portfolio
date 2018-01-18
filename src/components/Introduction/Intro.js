import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import profileImage from '../../images/newprofile.JPG'

class Intro extends Component {
  render() {
    return (
      <div className="container">
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <img src={profileImage} alt="My logo" />
              <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC</p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC</p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={4-4} xsOffset={4-4}>
              <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC</p>
            </Col>
          </Row>
        </Grid>
        </div>
      );
    }
  }
export default Intro;
