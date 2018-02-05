import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import CodeIcons from '../CodeIconsComponent/CodeIcons.js';

class Project extends Component {
  render () {
    console.log(this.props.project)
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <div style={{"height" : "600px"}}>
              <img src={this.props.project.screenshot} className="screenshot" alt="project screenshot"/>
            </div>
          </Col>
          <Col md={4}>
            <div style={{"height" : "200px"}}>
              <CodeIcons project={this.props.project}/>
            </div>
            
            <div style={{"height" : "200px"}}>
                <p>{this.props.project.description}</p>
            </div>

            <div style={{"height" : "200px"}}>
              <a href="https://github.com/RJForgie/">View on GitHub</a>
              <a href="">View Demo</a>
            </div>
          </Col>  
        </Row>
      </Grid>
    )
  }
}
export default Project;
