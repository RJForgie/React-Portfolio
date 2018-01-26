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
        <span class="devicons devicons-ruby"/>
        <span class="devicons devicons-postgresql"/>
        <span class="devicons devicons-html5"/>
        <span class="devicons devicons-css3"/>
      </div>
      
    );
  }
}
export default CodeIcons;
