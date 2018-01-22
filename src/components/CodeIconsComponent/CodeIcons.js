import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import ruby from '../../images/ruby.svg'
import postgres from '../../images/postgres.svg'
import html from '../../images/html.svg'
import css from '../../images/css.svg'

class CodeIcons extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={3} md={3}>
              <img src={ruby} className="icon"/>
            </Col>
            <Col xs={3} md={3}>
              <img src={postgres} className="icon"/>
            </Col>
            <Col xs={3} md={3}>
              <img src={html} className="icon"/>
            </Col>
            <Col xs={3} md={3}>
              <img src={css} className="icon"/>
            </Col>
          </Row>
        </Grid>
      );
    }
  }
export default CodeIcons;
