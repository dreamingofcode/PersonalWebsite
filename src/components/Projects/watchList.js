import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../portfolio.css';
import watchList from '../../assets/pictures/watchList.png';
const WatchList = () => {
  const [videoPlayer, setVideoPlayer] = useState('none');
  const [videoButton, setVideoButton] = useState('View Demo');
  const [toggleDemoVideo, setToggleDemo] = useState(false);
  const toggleVideo = () => {
    setToggleDemo(!toggleDemoVideo);
    toggleDemoVideo === true ? setVideoPlayer('flex') : setVideoPlayer('none');
    toggleDemoVideo === true
      ? setVideoButton('Close Demo')
      : setVideoButton('View Demo');
  };
  return (
    <React.Fragment>
      <Cell shadow={10} col={6} tablet={12} phone={12} className="about">
        <h3>Watch-List</h3>
        <div className="mobile">
          <Cell col={12} tablet={12} phone={12}>
            <h5>
              A social-Networking expirience infused with zodiac compatibility
              matching! Get your daily and general horoscope reading today!
            </h5>
            <img
              className="mobile-gif"
              src="https://media.giphy.com/media/cm0emWTfxAmqHeAFoR/giphy.gif"
              alt="Astro-Connection Gif presentation"
              height="300px"
            />
            <br />
            <button
              onClick={() => {
                toggleVideo();
              }}
            >
              {videoButton}
            </button>
            <a
              href="https://github.com/dreamingofcode/Astro-Connect"
              target="_blank"
            >
               <iframe
                style={{ display: `${videoPlayer}`, marginLeft: '80px' }}
                width="fit-content"
                height="fit-content"
                src="https://www.youtube.com/embed/g3UhHl7c57s?controls=0&amp;start=60"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <button>Github Repository</button>
            </a>
           
          </Cell>
        </div>
        <Cell
          className="project-card"
          col={12}
          tablet={3}
          offsetTablet={1}
          phone={12}
        >
          <div className="flip-card ">
            <div className="flip-card-inner ">
              <div className="flip-card-front ">
                <img
                  src={watchList}
                  alt="Avatar"
                  style={{ width: '513px', height: '200px' }}
                />
                <h5>
                  {' '}
                  A great tool to keep track of the movies you want to watch and
                  also movies you have already seen!
                </h5>
              </div>
              <div class="flip-card-back">
                <img
                  alt="WatchList website GIF"
                  src="https://media.giphy.com/media/cm0emWTfxAmqHeAFoR/giphy.gif"
                  alt="Astro-Connection Gif presentation"
                  height="300px"
                ></img>
              </div>
            </div>
            <Grid
              style={{
                marginTop: '0px',
                marginLeft: '90px',
                marginBottom: '25px',
              }}
            >
              <Cell col={4} offset={0} tablet={3} offsetTablet={0} phone={12}>
                <a
                  href="https://github.com/dreamingofcode/Astro-Connect"
                  target="_blank"
                >
                  <h5 style={{ marginRight: '50px', color: 'black' }}>
                    Github
                  </h5>
                </a>
              </Cell>
          
              <Cell col={4} tablet={2} phone={12}>
                <a
                href="https://youtu.be/g3UhHl7c57s" target="_blank"
                >
                  <h5 style={{ marginRight: '50px', color: 'black' }}>Demo</h5>
                </a>
              </Cell>
            </Grid>{' '}
          </div>{' '}
        </Cell>
        <Grid>
          <Cell
            col={6}
            tablet={12}
            phone={12}
            style={{ marginTop: '-50px', marginBottom: '30px' }}
          >
            <h4 className="underline">Features</h4>

            <p style={{ marginTop: '-20px' }}>User Account</p>
            <p style={{ marginTop: '-20px' }}>
              Create a WatchList and add movies
            </p>
            <p style={{ marginTop: '-20px' }}>
              Mark movies in WatchList as Watched or Remove
            </p>
            <p style={{ marginTop: '-20px' }}>Upload Movies to WatchList API</p>
            <p style={{ marginTop: '-20px' }}>Filter movie genres</p>
            <p style={{ marginTop: '-20px' }}>
              Share your watchlist with friends
            </p>
          </Cell>
          <Cell
            col={3}
            tablet={3}
            phone={12}
            offsetTablet={1}
            offsetPhone={0}
            style={{ marginTop: '-50px' }}
          >
            <h4 className="underline">Front-End</h4>

            <p style={{ marginTop: '-20px' }}>Javascript</p>
            <p style={{ marginTop: '-20px' }}>Bootstrap</p>
            <p style={{ marginTop: '-20px' }}>CSS</p>
            <p style={{ marginTop: '-20px' }}>HTML</p>
          </Cell>
          <Cell col={3} tablet={4} phone={12} style={{ marginTop: '-50px' }}>
            <h4 className="underline">Back-End</h4>
            <p style={{ marginTop: '-20px' }}>Ruby on Rails</p>
            <p style={{ marginTop: '-20px' }}>PosgreSQL</p>
            <p style={{ marginTop: '-20px' }}>Node.JS</p>
          </Cell>
        </Grid>
      </Cell>
    </React.Fragment>
  );
};
export default WatchList;
