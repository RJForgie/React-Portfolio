import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import CodeIcons from '../CodeIconsComponent/CodeIcons.js';

class Project extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <img src={this.props.project.screenshot} className="screenshot" alt="project screenshot"/>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <CodeIcons project={this.props.project}/>
            </div>
            
            <div>
                <p>{this.props.project.description}</p>
            </div>

            <div>
              <a href={this.props.project.github}>View on GitHub</a>
              <a href={this.props.project.demo}>View Demo</a>
            </div>
          </Col>  
        </Row>
      </Grid>
    )
  }
}
export default Project;
