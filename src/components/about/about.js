import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import me from '../../assets/pictures/me.jpg';
import FadeIn from 'react-fade-in';
import './about.css';
var GifPlayer = require('react-gif-player');

const About = () => {
  return (
    <div>
      <FadeIn transitionDuration="1800">
        <Grid>
          <Cell col={10} offsetDesktop={1} phone={12} tablet={12}>
            <div className="about-intro">
              <h1 style={{ marginTop: '15px' }}>About Me!</h1>
              <img className="me" src={me} alt="Picture of me" />
              <Cell col={10} offsetDesktop={1} phone={12} tablet={12}>
                {/* <h4 className="initial-intro">
                  One of my biggest aspirations in life is to find meaningful
                  work. I have an unquenchable thirst for opportunnities that
                  will allow me to obtain a sense of reassurance and fullfilment
                  through personal development and growth. I enjoy creative
                  fields and flourish in collaborative environments. My biggest
                  desire in life is to make an impact and to have a positive
                  influence on the world.
                </h4> */}
                <div
                  className="mobile-language-icons"
                  style={{ marginTop: '60px' }}
                >
                  <i
                    class="fab fa-js-square fa-7x"
                    style={{ marginLeft: '100px', marginBottom: '40px' }}
                  ></i>
                  <i
                    class="fab fa-react fa-7x"
                    style={{ marginLeft: '100px', marginBottom: '40px' }}
                  ></i>
                  <i
                    class="fab fa-html5 fa-7x"
                    style={{ marginLeft: '100px', marginBottom: '40px' }}
                  ></i>
                  <i
                    class="fab fa-css3-alt fa-7x"
                    style={{ marginLeft: '100px', marginBottom: '40px' }}
                  ></i>
                  {/* <i class="fab fa-node fa-7x" style={{ marginLeft: '100px' }}></i> */}
                </div>{' '}
              </Cell>
            </div>
          </Cell>

          <Cell
            className="bio"
            offsetDesktop={1}
            offsetPhone={0}
            shadow={12}
            col={10}
            tablet={12}
            phone={12}
          >
            <h1>Full-stack Software-Engineer</h1>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
              <h4>
                With about a little over a year's worth of experience in web
                development, I have experience with Object-oriented programming,
                CRUD functions, data-structures, DOM manipulation and life
                cycles, asynchronous processes, RESTful APIs, MVC structures,
                GIT, error-handling, and many more concepts. My tech stack
                includes: Ruby On Rails, SQL, Sinatra, Express, NodeJS,
                Javascript, HTML, CSS, and ReactJS. I have experience in
                developing both front-end solutions as well as back-end API’s
                and servers. I have experience launching multiple webpages on
                cloud infrastructures and also implementing mobile
                responsiveness.
                <br /> I am highly driven, optimistic, empathetic,
                collaborative, and persistent. Currently I spend my time developing my portfolio and
                learning new technologies through online courses. I seek valuable connections and opportunities thay offer me the potential for
                growth and expansion in order to carry myself into the next
                phase of my career as a professional .
              </h4>
            </div>
          </Cell>
        </Grid>
        <Grid style={{ marginTop: '-50px', marginLeft: '-80px' }}>
          <Cell
            shadow="10"
            col={2}
            offsetDesktop={2}
            offsetPhone={1}
            tablet={12}
            offsetTablet={2}
            phone={12}
            style={{
              marginTop: '80px',
              marginRight: '50px',
              backgroundColor: '#8898b6',
              // width: '1200px',
              border: 'purple solid',
            }}
          >
            <i class="fas fa-desktop fa-4x" style={{ marginTop: '15px' }}></i>
            <h4 style={{ marginTop: '-2px' }}>Front-End</h4>
            <h5> HTML</h5>
            <h5>CSS</h5>
            <h5>Javascript</h5>
            {/* <h5>Jquery</h5> */}
            <h5>React | Redux</h5>
          </Cell>
          <Cell
            shadow="10"
            col={2}
            tablet={12}
            offsetTablet={2}
            offsetPhone={1}
            phone={12}
            style={{
              marginTop: '80px',
              marginRight: '50px',
              backgroundColor: '#8898b6',
              border: 'purple solid',
            }}
          >
            <i class="fas fa-share-alt fa-4x" style={{ marginTop: '15px' }}></i>
            <h4 style={{ marginTop: '-2px' }}>
              Server
              <h5>NodeJS</h5>
              <h5>Express</h5>
              <h5>Socket.IO</h5>
              <h5>Ruby on Rails</h5>
            </h4>
          </Cell>
          <Cell
            shadow="10"
            col={2}
            tablet={12}
            offsetTablet={2}
            offsetPhone={1}
            phone={12}
            style={{
              marginTop: '80px',
              marginRight: '50px',
              backgroundColor: '#8898b6',
              border: 'purple solid',
            }}
          >
            <i class="fas fa-database fa-4x" style={{ marginTop: '15px' }}></i>
            <h4 style={{ marginTop: '-2px' }}>Database</h4>
            <h5> PostgreSQL</h5>
            <h5>mySQL</h5>
            {/* <h5> MongoDB</h5> */}
            <h5> Cloudinary</h5>
          </Cell>

          <Cell
            shadow="10"
            col={2}
            tablet={12}
            offsetTablet={2}
            offsetPhone={1}
            phone={12}
            style={{
              marginTop: '80px',
              marginRight: '50px',
              backgroundColor: '#8898b6',
              border: 'purple solid',
            }}
          >
            <i
              class="fas fa-cloud-upload-alt fa-4x"
              style={{ marginTop: '15px' }}
            ></i>
            <h4 style={{ marginTop: '-2px' }}>Deployment</h4>
            <h5> System Design</h5>
            <h5> Docker </h5>
            <h5> Heroku</h5>
          </Cell>
        </Grid>
      </FadeIn>
    </div>
  );
};
export default withRouter(About);
