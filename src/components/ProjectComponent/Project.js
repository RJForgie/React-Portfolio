import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import CodeIcons from '../CodeIconsComponent/CodeIcons.js';

class Project extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <div style={{"height" : "600px"}}>
              <img src={this.props.project1.screenshot} className="screenshot"/>
            </div>
          </Col>
          <Col md={4}>
            <div style={{"height" : "300px", "object-fit": "contain"}}>
              <CodeIcons project1={this.props.project1}/>
            </div>
            <div style={{"height" : "300px"}}>
              <Button bsStyle="primary">Demo</Button>
              <Button bsStyle="primary">GitHub Repo</Button>
            </div>
          </Col>      
        </Row>
      </Grid>
    )
  }
}
export default Project;
