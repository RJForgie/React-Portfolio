import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class CodeIcons extends Component {
  render() {
    return (
      // <Grid>
      //   <Row>
      //     {this.props.project1.icons.map(item =>
      //       <Col xs={3} md={3}>
      //         <img src={item} className="icon" />
      //       </Col>
      //     )}
      //     {/* <p>{this.props.project1.description}</p> */}
      //   </Row> 
      // </Grid>
      <div id="icon-container">
        <span className="devicons devicons-ruby"/>
        <span className="devicons devicons-postgresql"/>
        <span className="devicons devicons-html5"/>
        <span className="devicons devicons-css3"/>
      </div>
      
    );
  }
}
export default CodeIcons;
