import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import FadeIn from 'react-fade-in';
import './algorithms.css';
import TwoSums from './twoSums';
import ValidateSubsequence from './validateSubsequence';
const Algorithms = () => {
  const [sourceImage, setSourceImage] = useState();
  const [sourceCodeTitle, setSourceCodeTitle] = useState();

  return (
    <div>
      <FadeIn transitionDuration="1800">
        <h1 className="initial">Algorithms!</h1>
        <Cell col={8} offsetDesktop={2} phone={12} tablet={12}>
          <h5 style={{ marginTop: '-10px', marginBottom: '80px' }}>
            For the sake of practice and optimal data structure design, I post
            algorithms every friday afternoon! You can also view the source
            code!
          </h5>
        </Cell>
        <div className="about">
          <Grid>
            <Cell col={6} phone={12} tablet={12}>
              <TwoSums
                setSourceImage={setSourceImage}
                sourceImage={sourceImage}
                setSourceCodeTitle={setSourceCodeTitle}
                sourceCodeTitle={sourceCodeTitle}
              />
            </Cell>
            <Cell col={6} phone={12} tablet={12}>
              <ValidateSubsequence
                setSourceImage={setSourceImage}
                sourceImage={sourceImage}
                setSourceCodeTitle={setSourceCodeTitle}
                sourceCodeTitle={sourceCodeTitle}
              />
            </Cell>
          </Grid>
        </div>
      </FadeIn>
    </div>
  );
};
export default Algorithms;
