import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../portfolio.css';
import travelly from '../../assets/pictures/travelly.png';
const Travelly = () => {
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
        <h3>Travelly</h3>
        <div className="mobile">
          <Cell col={12} tablet={12} phone={12}>
            <h5>
              All your travel needs in one place! Search for flights and hotels along with our trip calculator to book the perfect trip based on your budget!
            </h5>
            <img
              className="mobile-gif"
              src="https://media.giphy.com/media/ggu2BWwMEHFVDlrUTh/giphy.gif"
              alt="Travelly Gif presentation"
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
              href="https://github.com/dreamingofcode/Travelly"
              target="_blank"
            >
              
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
                  src={travelly}
                  alt="Avatar"
                  style={{ width: '513px', height: '200px' }}
                />
                <h5>
                  {' '}
                 Book the perfect trip at the lowest price ever! Use our trip calculator to find awesome trips based on your budget!
                </h5>
              </div>
              <div class="flip-card-back">
                <img
                  alt="WatchList website GIF"
                  src="https://media.giphy.com/media/ggu2BWwMEHFVDlrUTh/giphy.gif"
                  alt="travelly Gif presentation"
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
                  href="https://github.com/dreamingofcode/travelly"
                  target="_blank"
                >
                  <h5 style={{ marginRight: '50px', color: 'black' }}>
                    Github
                  </h5>
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

            <p style={{ marginTop: '-20px' }}>Trip calculator</p>
            <p style={{ marginTop: '-20px' }}>
             Browse through flights
            </p>
            <p style={{ marginTop: '-20px' }}>
       Browse through hotels
            </p>
            <p style={{ marginTop: '-20px' }}>Book the perfect trip</p>
         
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

            <p style={{ marginTop: '-20px' }}>CSS</p>
            <p style={{ marginTop: '-20px' }}>HTML</p>
          </Cell>
          <Cell col={3} tablet={4} phone={12} style={{ marginTop: '-50px' }}>
            <h4 className="underline">Back-End</h4>
            <p style={{ marginTop: '-20px' }}>under construction</p>
          
          </Cell>
        </Grid>
      </Cell>
    </React.Fragment>
  );
};
export default Travelly;
