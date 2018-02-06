import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import profileImage from '../../images/newprofile.JPG'

class Intro extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col s={12} md={12} lg={12}>
              <img className="profile-img" src={profileImage} alt="My logo" />
              <p>Software Developer based in Edinburgh, Scotland</p>
            </Col>
          </Row>
          <Row>
            <Col s={12} md={12} lg={12}>
              <p>Graduate of <a href="https://codeclan.com/">CodeClan</a></p>
            </Col>
          </Row>
          <Row>
            <Col s={12} md={12} lg={12}>
              <p>Please scroll down to view some of the projects I've built</p>
            </Col>
          </Row>
        </Grid>
        </div>
      );
    }
  }
export default Intro;
