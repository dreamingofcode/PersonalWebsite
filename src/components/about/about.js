import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import me from '../../assets/pictures/me.jpg';
import FadeIn from 'react-fade-in';
import './about.css'
var GifPlayer = require('react-gif-player');

const About = () => {
  return (
    <div>
      <FadeIn transitionDuration="1800">
        <Grid>
          <Cell col={10} offsetDesktop={1}  phone={12} tablet={12}>
            <div className="about-intro mobile-cell">
              <h1 style={{ marginTop: '15px' }}>About Me!</h1>
              <img
              className="me"
                src={me}
                alt="Picture of me"
               
              />
              <h4  className="initial-intro" >
                One of my biggest aspirations in life is to find meaningful
                work. I have an unquenchable thirst for opportunnities that will
                allow me to obtain a sense of reassurance and fullfilment
                through personal development and growth. I enjoy creative fields
                and flourish in collaborative environments. My biggest desire in
                life is to make an impact and to have a positive influence on
                the world.
              </h4>
            </div>
          </Cell>
          <Cell  col={12} tablet={2} offsetTablet={1} phone={12} offsetPhone={0}>
            <div className="mobile-language-icons" style={{ marginTop: '60px', }}>
              <i
                class="fab fa-js-square fa-7x"
                style={{ marginLeft: '100px',marginBottom:"40px" }}
              ></i>
              <i class="fab fa-react fa-7x" style={{ marginLeft: '100px',marginBottom:"40px"  }}></i>
              <i class="fab fa-html5 fa-7x" style={{ marginLeft: '100px',marginBottom:"40px"  }}></i>
              <i
                class="fab fa-css3-alt fa-7x"
                style={{ marginLeft: '100px',marginBottom:"40px"  }}
              ></i>
              <i class="fab fa-node fa-7x" style={{ marginLeft: '100px' }}></i>
            </div>{' '}
          </Cell>
          <Cell
            offsetDesktop={0}
            offsetPhone={0}
            shadow={12}
            col={12}
            tablet={12}
            phone={12}
            style={{
              marginTop: '80px',
              // marginRight:"160px",
              // marginLeft:"160px",
              backgroundColor: '#8898b6',
              width: "fit-content",
              border: 'purple solid',
            }}
          >
            <h1>Full-stack Software-Engineer</h1>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
              <h5>
                {' '}
                My passion for software-engineering primarily began
                approximatetly four years ago once I initially discovered that
                the field was heavily dependent on collaboration and
                problem-solving through creative thinking. I am intrigued by the
                sophicatication and intricacy of the level of association and
                networking that is required to build software and other
                large-scale technologies. Initially, I planned to aquire a
                bachelors in Computer Science, however, due to circumstances
                outside of my immediate control, I was only able to aquire my
                Associates Degree in Applied Science. My degree was fully geared
                towards my transition into a computer science program and so the
                majority of my focus was heavily mathematical and STEM related.
              </h5>
              <b />
              <h5>
                {' '}
                After many months of tireless research and consideration I made
                the decision to attend a software-engineering bootcamp in order
                to get a jumpstart in my carreer. I attended Flatiron Schools'
                fully-immersive full-stack web development program at the
                beginning of 2020 and graduated in the month of April. While in
                this intense program I was able to realize my true potential in
                becoming an independent scholar and also aquired the most ideal
                foundational understanding about programming. I have aquired
                proficient understanding of object-oriented programing, MVC
                models, optimization of data structures, asynchronous
                mechanisms, and many other related programming concepts.
              </h5>
              <b />
              <h5>
                {' '}
                Currently, I have taken the initiative to broaden my
                professional skills and gain more expirience by making myself
                available to freelance work and personal projects. I am also
                enrolled in various certification programs in MEAN stack and
                Advanced Web Design. After approaching multiple projects, I have
                taken a greater interest in Front end development and so
                creating beautiful Design and vibrant webpages is a major
                interest for me.
              </h5>
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
