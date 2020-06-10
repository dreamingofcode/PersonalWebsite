import React from 'react';
import './portfolio.css';
import { Grid, Cell } from 'react-mdl';
import FadeIn from 'react-fade-in';
import AstroConnection from './Projects/astroConnection';
import WatchList from './Projects/watchList';

const Portfolio = () => {
  return (
    <React.Fragment>
      <FadeIn transitionDuration="1800">
        <h1>Project Portfolio</h1>
        <Grid>
          <AstroConnection />
          <WatchList />
        </Grid>
      </FadeIn>
    </React.Fragment>
  );
};
export default Portfolio;
