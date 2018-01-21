import React, { Component } from 'react';
import { Bootstrap, Button, Jumbotron, Row, Grid, Col } from 'react-bootstrap';
import ScrollingColorBackground from 'react-scrolling-color-background'
import NavBar from './HeaderComponent/NavBar.js';
import Intro from './Introduction/Intro.js';
import Links from './LinksComponent/Links.js';
import test from '../images/test.gif'

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
          data-background-color='rgb(4, 20, 79)'
          className='js-color-stop'
          id="intro-section"
          >
            <div
              style={{"position" : "absolute", "width" : "100%"}}
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
                <div>
                  <img className="screenshot" src={test} alt="My logo" />
                      <Button>Button</Button>
                    </div>
                  </section>
            <section
              data-background-color='rgb(254, 201, 64)'
              className='js-color-stop'
              id="project1-section"
              >
                <div>
                    <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                      Cicero in 45 BC

                      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                      soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                      saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                      voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                      repellat."</p>
                      <Button>Button</Button>
                    </div>
                  </section>
            <section
              data-background-color='rgb(101, 45, 172)'
              className='js-color-stop'
              id="project2-section"
              >
                <div>
                    <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                      Cicero in 45 BC

                      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                      soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                      saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                      voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                      repellat."</p>
                      <Button>Button</Button>
                    </div>
                  </section>
            <section
              data-background-color='rgb(32, 202, 100)'
              className='js-color-stop'
              id="project3-section"
              >
                <div>
                    <p>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                      Cicero in 45 BC

                      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                      soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                      saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                      voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                      repellat."</p>
                      <Button>Button</Button>
                    </div>
                  </section>
                </div>
              )
            }
          }

          export default HomePage;
