import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class CodeIcons extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">

          {this.props.project1.icons.map(item =>
            <Col xs={3} md={3}>
              <img src={item} className="icon" />
            </Col>
          )}
          <p>{this.props.project1.description}</p>
        </Row> 
      </Grid>
    );
  }
}
export default CodeIcons;
