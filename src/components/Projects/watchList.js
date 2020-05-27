import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import watchList from '../../assets/pictures/watchList.png';
const WatchList = () => {
  return (
    <React.Fragment>
     <Cell shadow="10" col="6" className="about">
          <h3>Watch-List</h3>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div className="flip-card-front">
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
                <img src="https://media.giphy.com/media/cm0emWTfxAmqHeAFoR/giphy.gif" alt="WatchList website GIF" height="300px"></img>
              </div>
            </div>
          </div>
          <Grid style={{ marginTop: '-100px', marginLeft: '160px' ,marginBottom:"25px"}}>
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
              href="https://youtu.be/g3UhHl7c57s"
              target="_blank"
            >
              <h5 style={{ marginRight: '50px', color: 'black' }}>Demo</h5>
            </a>
          </Grid>{' '}
          <Grid>
          <Cell col="3" style={{ marginTop: '-50px' }}>
            <h4>Front-End</h4>

            <p style={{ marginTop: '-0px' }}>Javascript</p>
            <p style={{ marginTop: '-20px' }}>Bootstrap</p>
            <p style={{ marginTop: '-20px' }}>CSS</p>
            <p style={{ marginTop: '-20px' }}>HTML</p>
          </Cell>
          <Cell col="3" style={{ marginTop: '-50px' }}>
            <h4>Back-End</h4>

            <p style={{ marginTop: '-0px' }}>Ruby on Rails</p>
            <p style={{ marginTop: '-20px' }}>PosgreSQL</p>
            <p style={{ marginTop: '-20px' }}>Node.JS</p>
          </Cell>
          <Cell col="6" style={{ marginTop: '-50px' }}>
            <h4>Features</h4>

            <p style={{ marginTop: '-0px' }}>User Account</p>
            <p style={{ marginTop: '-20px' }}>Create a WatchList and add movies</p>
            <p style={{ marginTop: '-20px' }}>
            Mark movies in WatchList as Watched or Remove
            </p>
            <p style={{ marginTop: '-20px' }}>Upload Movies to WatchList API</p>
            <p style={{ marginTop: '-20px' }}>
              Filter movie genres
            </p>
            <p style={{ marginTop: '-20px' }}>
       Share your watchlist with friends
            </p>
          </Cell>
        </Grid>
        </Cell>
    </React.Fragment>
  );
};
export default WatchList;
