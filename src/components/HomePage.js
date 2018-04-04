import React, { Component } from 'react';
import ScrollingColorBackground from 'react-scrolling-color-background'
import Intro from './Introduction/Intro.js';
import Links from './LinksComponent/Links.js';
import Project from './ProjectComponent/Project.js';
import MCBScreenshot from '../images/MoneyCashBoardScreenshot.png';
import TSScreenshot from '../images/TravelSafeScreenshot.png';
import WEScreenshot from '../images/WalkableEdinburghScreenshot.png';
import ProjectDescriptions from '../text/projectDescriptions.js';

const project1 = {icons: ["ruby", "postgresql", "html5", "css3"], 
                  description: ProjectDescriptions.MoneyCashBoard, 
                  screenshot: MCBScreenshot,
                  github: "https://github.com/RJForgie/Project-Moneycashboard",
                  demo: "https://ruby-money-cash-board.herokuapp.com/"
                };
const project2 = {icons: ["javascript", "nodejs", "html5", "css3"], 
                  description: ProjectDescriptions.TravelSafe, 
                  screenshot: TSScreenshot,
                  github: "https://github.com/RJForgie/Travel-Safe",
                  demo: "https://travel-safe-app.herokuapp.com/"
                };
const project3 = {icons: ["javascript", "nodejs", "mongodb", "html5", "css3"], 
                  description: ProjectDescriptions.WalkableEdinburgh, 
                  screenshot: WEScreenshot,
                  github: "https://github.com/RJForgie/Group-Project-JS-Route-Planner",
                  demo: "https://walkable-edinburgh.herokuapp.com/"
                };

class HomePage extends Component {
  render() {
    return (
      <div id="main">
        <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        />

        <section
          data-background-color='rgb(32, 202, 172)'
          className='js-color-stop'
          id="intro-section"
        >
          <div id="intro-container">
            <Intro />
            <Links />
          </div>
        </section>

        <section
          data-background-color='rgb(254, 201, 64)'
          className='js-color-stop'
          id="project-section">
          <div className="project">
            <Project project={project1} />
          </div>
        </section>

        <section
          data-background-color='rgb(101, 45, 172)'
          className='js-color-stop'
          id="project-section">
          <div className="project">
            <Project project={project2} />
          </div>
        </section>

        <section
          data-background-color='rgb(38, 202, 100)'
          className='js-color-stop'
          id="project-section">
          <div className="project">
            <Project project={project3} />
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;
