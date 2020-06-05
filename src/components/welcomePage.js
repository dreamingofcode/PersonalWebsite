import React from 'react';
import { useState } from 'react';
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  IconButton,
} from 'react-mdl';
import { withRouter } from 'react-router';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import porfolioPreset from '../assets/pictures/porfolioPreset.png';
import blogPreset from '../assets/pictures/blogPreset.png';
import algoPreset from '../assets/pictures/algoPreset.png';
var GifPlayer = require('react-gif-player');
const blackBackground =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEUXBgTvJOuwAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=';
const WelcomePage = () => {
  const [isShown, setIsShown] = useState(blackBackground);
  const [isShownPorfolio, setIsShownPorfolio] = useState(porfolioPreset);
  const [isShownBlog, setIsShownBlog] = useState(blogPreset);
  const [isShownAlgo, setIsShownAlgo] = useState(algoPreset);
  return (
    <div className="about">
      <FadeIn transitionDuration="1800">
          <Cell col={8} offset="2"  >
        <h1 style={{paddingTop:"70px"}} >Welcome!</h1>
            <h5 style={{ marginBottom: '50px' }}>
              Hello and welcome to my Personal Website! I am a full-stack
              software engineer currently living in the city of Chicago! I am
            available for both freelance work and also for a
              permanent position within a collaborative and exiciting team! I am
              heavily invested in my personal development and so I seek any
              great opportunity which will allow me to showcase and strengthen
              my professional skills. I am resourceful, driven, creative, and
              optomistic. Reach out!
            </h5>
          </Cell>
  <div className="abot"  style={{marginTop:"30px"}}>
        <Grid >
          <Cell col={6} tablet={12} offset="">
            <div
              onMouseEnter={() => {
                setIsShown(
                  'https://media.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif'
                );
              }}
              onMouseLeave={() => {
                setIsShown(
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEUXBgTvJOuwAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII='
                );
              }}
            >
              <Card
                shadow={10}
                style={{ width: '530px', margin: 'auto', marginBottom: '40px' }}
              >
                <CardTitle
                  expand
                  style={{
                    color: 'white',
                    height: '176px',
                    background: `url(${isShown})`,
                  }}
                >
                  About Me!
                </CardTitle>

                <CardText>
                  Software-Enginner currently seeking an opportunity to further
                  develop and grow my professional skills in an environment
                  which nurtures and encourages diversity and creativity
                </CardText>
                <CardActions border>
                  {/* <Button
                  colored
                  raised
                  ripple
                  
                > */}
                  <Link to="/about">Learn More</Link>

                  {/* </Button> */}
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
    
                  {/* <IconButton name="share" /> */}
                </CardMenu>
              </Card>
            </div>
          </Cell>
          <Cell col={6} tablet={12}>
            <div
              onMouseEnter={() => {
                setIsShownPorfolio(
                  'https://media.giphy.com/media/7ltN7lCgF2MQE/giphy.gif'
                );
              }}
              onMouseLeave={() => {
                setIsShownPorfolio(porfolioPreset);
              }}
            >
              <Card
                shadow={10}
                style={{
                  width: '530px',
                  margin: 'auto',
                }}
              >
                <CardTitle
                  style={{
                    color: 'white',
                    height: '176px',
                    background: `url(
${isShownPorfolio} )`,
                    backgroundPosition: '20px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '-21px',
                  }}
                >
                  . Porfolio
                </CardTitle>
                <CardText>
                  Checkout my latest projects in full-stack web-development and
                  get to know my capabilities in Javascript, Ruby on Rails,
                  HTML,CSS and many more awesome technologies!
                </CardText>
                <CardActions border>
                  {/* <Button colored raised ripple to="/About"> */}
                  <Link to="/Porfolio"> View Porfolio</Link>
                  {/* </Button> */}
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  {/* <IconButton name="share" /> */}
                </CardMenu>
              </Card>{' '}
            </div>
          </Cell>
          <Cell col={6} tablet={12}>
            <div
              onMouseEnter={() => {
                setIsShownBlog(
                  'https://media.giphy.com/media/KGSAt6Ai159eXoDvLn/giphy.gif'
                );
              }}
              onMouseLeave={() => {
                setIsShownBlog(blackBackground);
              }}
            >
              <Card shadow={10} style={{ width: '530px', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'white',
                    height: '176px',

                    background: `url(
                    ${isShownBlog}) center / cover `,
                    // backgroundPosition: '20px',
                    // backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // marginLeft: '-12px',
                  }}
                >
                  Blog
                </CardTitle>
                <CardText>
                  Through the eyes of a bootcamp graduate, read all about my
                  journey and also my new ventures as I navigate through the job
                  searching process and alot more!
                </CardText>
                <CardActions border>
                  {/* <Button colored raised ripple to="/About"> */}
                  <Link to="/Blog">Checkout My Blog</Link>
                  {/* </Button> */}
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  {/* <IconButton name="share" /> */}
                </CardMenu>
              </Card>{' '}
            </div>
          </Cell>
          <Cell col={6} tablet={12}>
            <div
              onMouseEnter={() => {
                setIsShownAlgo(
                  'https://media.giphy.com/media/6wa5vuYvetU1Jibm13/giphy.gif'
                );
              }}
              onMouseLeave={() => {
                setIsShownAlgo(algoPreset);
              }}
            >
              <Card shadow={10} style={{ width: '530px', margin: 'auto' }}>
                <CardTitle
                  style={{
                    color: 'black',
                    height: '176px',
                    backgroundRepeat: 'no-repeat',
                    background: `url(${isShownAlgo}) center / cover`,
                  }}
                >
                  Algorithms
                </CardTitle>
                <CardText>
                  To enhance and improve my skills in data-structures, I deploy
                  a new algorithm problem every week on my site!
                </CardText>
                <CardActions border>
                  {/* <Button colored raised ripple to="/About"> */}
                  <Link to="/Algorithms">Test Algorithms</Link>
                  {/* </Button> */}
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  {/* <IconButton name="share" /> */}
                </CardMenu>
              </Card>{' '}
            </div>
          </Cell>
        </Grid>{' '}
          </div>
      </FadeIn>
    </div>
  );
};
export default withRouter(WelcomePage);
