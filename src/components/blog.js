import React from 'react';
import FadeIn from 'react-fade-in';
import { Grid, Cell,Card,CardTitle,CardText,CardMenu,CardActions,IconButton,Button } from 'react-mdl';
// import BlogSlider from './blogSlider'
const Blog = () => {
  return (
    <div>
      <FadeIn transitionDuration="1800">
        <h1 className="mydiv">Blog</h1>
        <div className="about">
<Grid>
  <Cell><Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}><h4>Self-taught, Coding Bootcamp, or Bachelors degree!?</h4></CardTitle>
    <CardText>
    <h>Self-taught, Coding Bootcamp, or Bachelors degree!?</h>    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
  
</Card>
    
  </Cell>
</Grid>
        </div>
      </FadeIn>
    </div>
  );
};
export default Blog;
