import React from 'react';
import './porfolio.css';
import { Grid, Cell } from 'react-mdl';
import FadeIn from 'react-fade-in';
import AstroConnection from './Projects/astroConnection';
import WatchList from './Projects/watchList';

const Porfolio = () => {
  return (
    <React.Fragment>
      <FadeIn transitionDuration="1800">
        <h1>Porfolio</h1>
        <Grid>
          <AstroConnection />
          <WatchList />
        </Grid>
      </FadeIn>
    </React.Fragment>
  );
};
export default Porfolio;
