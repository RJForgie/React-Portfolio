import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ScrollingColorBackground from 'react-scrolling-color-background'
// import NavBar from './HeaderComponent/NavBar.js';
import Intro from './Introduction/Intro.js';
import CodeIcons from './CodeIconsComponent/CodeIcons.js';
import Links from './LinksComponent/Links.js';
import Project from './ProjectComponent/Project.js';
import MCBScreenshot from '../images/MoneyCashBoardScreenshot.png';
import TSScreenshot from '../images/TravelSafeScreenshot.png';
import WEScreenshot from '../images/WalkableEdinburghScreenshot.png';
import ProjectDescriptions from '../text/projectDescriptions.js';

const project1 = {icons: ["ruby", "postgresql", "html5", "css3"], 
                  description: ProjectDescriptions.MoneyCashBoard, 
                  screenshot: MCBScreenshot
                };
const project2 = {icons: ["javascript", "nodejs", "html5", "css3"], 
                  description: ProjectDescriptions.TravelSafe, 
                  screenshot: TSScreenshot
                };
const project3 = {icons: ["javascript", "nodejs", "html5", "css3"], 
                  description: ProjectDescriptions.WalkableEdinburgh, 
                  screenshot: WEScreenshot
                };

class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        />
        {/* <NavBar /> */}

        <section
          data-background-color='rgb(32, 202, 172)'
          className='js-color-stop'
          id="intro-section"
        >
          <div
            style={{ "position": "absolute", "width": "100%" }}
          >
            <Intro />
            <Links />
          </div>
        </section>

        <section
          data-background-color='rgb(32, 202, 172)'
          className='js-color-stop'
          id="background-section"
        >
          <div className="project">
            <CodeIcons project={project1} />
          </div>
        </section>

        <section
          data-background-color='rgb(254, 201, 64)'
          className='js-color-stop'
          id="project1-section">
          <div className="project">
            <Project project={project1} />
          </div>
        </section>

        <section
          data-background-color='rgb(101, 45, 172)'
          className='js-color-stop'
          id="project2-section">
          <div className="project">
            <Project project={project2} />
          </div>
        </section>

        <section
          data-background-color='rgb(32, 202, 100)'
          className='js-color-stop'
          id="project3-section">
          <div className="project">
            <Project project={project3} />
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;
