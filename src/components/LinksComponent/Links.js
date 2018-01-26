import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'

class Links extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <Button className="link-button" bsStyle="primary">
                <img className="button-icon" src={linkedin} alt="linkedin button"/>
              </Button>
            </Col>

            <Col xs={4-4} md={4-4}>
              <Button className="link-button" bsStyle="primary">
                <img className="button-icon" src={github} alt="github button"/>
            </Button>
            </Col>
          </Row>
        </Grid>
      );
    }
  }
export default Links;
