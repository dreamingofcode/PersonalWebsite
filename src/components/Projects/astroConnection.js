import React, { useState } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../portfolio';

import astroConnection from '../../assets/pictures/astroConnection.png';
const AstroConnection = () => {
  const [videoPlayer, setVideoPlayer] = useState('none');

  return (
    <React.Fragment>
      <Cell col={6} tablet={12} phone={12} shadow="10" className="about">
        <h3>Astro-Connection</h3>
        <div className="mobile">
          <Cell tablet={12} phone={12}>
            <h5>
              A social-Networking expirience infused with zodiac compatibility
              matching! Get your daily and general horoscope reading today!
            </h5>
            <img
              className="mobile-gif"
              src="https://media.giphy.com/media/l0od7tThpTldB4whck/giphy.gif"
              alt="Astro-Connection Gif presentation"
              height="300px"
            />
            <br />
            <button
              onClick={() => {
                setVideoPlayer('flex');
              }}
            >
              View Demo
            </button>
            <a
              href="https://github.com/dreamingofcode/Astro-Connect"
              target="_blank"
            >
              <button>Github Repository</button>
            </a>
            <a href="https://astr-connection.herokuapp.com/" target="_blank">
              <button>Visit Website</button>
            </a>
            <iframe
              style={{ display: `${videoPlayer}`, marginLeft:"20px" }}
              width="400"
              height="315"
             
              src="https://www.youtube.com/embed/leuY6ShOFBA?controls=0&amp;start=60"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Cell>
        </div>
        <div class="flip-card project-card">
          <div class="flip-card-inner ">
            <div className="flip-card-front ">
              <img
                src={astroConnection}
                alt="Avatar"
                style={{ width: '513px', height: '200px' }}
              />
              <h5>
                {' '}
                A social-Networking expirience infused with zodiac compatibility
                matching! Get your daily and general horoscope reading today!
              </h5>
            </div>
            <div class="flip-card-back">
              <img
                src="https://media.giphy.com/media/l0od7tThpTldB4whck/giphy.gif"
                alt="Astro-Connection Gif presentation"
                height="300px"
              ></img>
            </div>
          </div>
          <Grid style={{ marginTop: '0px', marginLeft: '90px' }}>
            <a
              href="https://github.com/dreamingofcode/Astro-Connect"
              target="_blank"
            >
              <h5 style={{ marginRight: '50px', color: 'black' }}>Github</h5>
            </a>
            <a href="https://astr-connection.herokuapp.com/" target="_blank">
              <h5 style={{ marginRight: '50px', color: 'black' }}>Heroku</h5>
            </a>
            <a
              href="https://www.youtube.com/watch?v=leuY6ShOFBA&t=60s"
              target="_blank"
            >
              <h5 style={{ marginRight: '50px', color: 'black' }}>Demo</h5>
            </a>
          </Grid>{' '}
        </div>
        <Grid>
          <Cell col="3" style={{ marginTop: '-50px' }}>
            <h4>Front-End</h4>

            <p style={{ marginTop: '-0px' }}>React.JS</p>
            <p style={{ marginTop: '-20px' }}>Redux & Hooks</p>
            <p style={{ marginTop: '-20px' }}>Bootstrap</p>
            <p style={{ marginTop: '-20px' }}>CSS</p>
            <p style={{ marginTop: '-20px' }}>HTML</p>
            <p style={{ marginTop: '-20px' }}>Socket.IO</p>
          </Cell>
          <Cell col="3" style={{ marginTop: '-50px' }}>
            <h4>Back-End</h4>

            <p style={{ marginTop: '-0px' }}>Ruby on Rails</p>
            <p style={{ marginTop: '-20px' }}>PosgreSQL</p>
            <p style={{ marginTop: '-20px' }}>Cloudinary</p>
            <p style={{ marginTop: '-20px' }}>Express</p>
            <p style={{ marginTop: '-20px' }}>Node.JS</p>
          </Cell>
          <Cell col="6" style={{ marginTop: '-50px' }}>
            <h4>Features</h4>

            <p style={{ marginTop: '-0px' }}>Daily Horoscope Reading</p>
            <p style={{ marginTop: '-20px' }}>General Horsocope Reading</p>
            <p style={{ marginTop: '-20px' }}>
              Horoscope-match compatibipty calculator
            </p>
            <p style={{ marginTop: '-20px' }}>User Account</p>
            <p style={{ marginTop: '-20px' }}>User Image upload</p>
            <p style={{ marginTop: '-20px' }}>
              Instant Messaging and Chat-rooms
            </p>
          </Cell>
        </Grid>
      </Cell>
    </React.Fragment>
  );
};
export default AstroConnection;
