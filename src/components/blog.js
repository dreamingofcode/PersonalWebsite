import React from 'react';
import FadeIn from 'react-fade-in';
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
  CardActions,
  Button,
} from 'react-mdl';

import './blog.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

function Blog() {
  const classes = useStyles();

  return (
    <div>
      <FadeIn transitionDuration="1800">
        <h1 className="mydiv initial">Personal Blog</h1>
        <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
          <h4 style={{ marginTop: '-10px', marginBottom: '80px' }}>
            From the perspective of a Bootcamp graduate, keep up with my
            personal blog and learn more about my journey and other relevant
            technologies you should know!!
          </h4>
        </Cell>
        <Grid
          className="demo-grid-2 about"
          style={{ marginBottom: '70px', paddingTop: '70px' }}
        >
          <Cell col={6} tablet={12} phone={12}>
            <Card
              className="card"
              shadow={10}
              style={{
                width: 'fit-content',
                margin: 'auto',
                marginBottom: '70px',
              }}
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/u00DkhlFRgkei3d3jG/giphy.gif) center / cover',
                }}
              >
                <h4>Self-taught, Coding Bootcamp, or Bachelors degree!?</h4>
              </CardTitle>
              <CardText>
                <h>
                  What is the best approach for a prospecting programmer to take
                  into considerstion when beginning the transition into the
                  field of code!
                </h>{' '}
              </CardText>
              <CardActions border>
                <a
                  href="https://medium.com/@cesarmota922/self-taught-coding-bootcamp-or-bachelors-degree-d17dde2fbc37"
                  target="_blank"
                >
                  <Button colored raised ripple>
                    Read Blog
                  </Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: 'white' }}>
                <p>January 14,2020</p>
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={6} tablet={12} phone={12}>
            <Card
              className="card"
              shadow={10}
              style={{
                width: 'fit-content',
                margin: 'auto',
                marginBottom: '70px',
              }}
            >
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/ief2yhxHGqjKFKdsHB/giphy.gif) center / cover',
                }}
              >
                <h4>
                  Debugging & Reading SPEC Error Messages Efficiently inside
                  CRUD Labs.
                </h4>
              </CardTitle>
              <CardText>
                <h>
                  Learn about the best debugging practices and how to use some
                  tools that are available!
                </h>{' '}
              </CardText>
              <CardActions border>
                <a
                  href="https://medium.com/@cesarmota922/debugging-reading-spec-error-messages-efficiently-inside-crud-labs-8bef15333261"
                  target="_blank"
                >
                  <Button colored raised ripple>
                    Read Blog
                  </Button>
                </a>
              </CardActions>
              <CardMenu>
                <p style={{ color: 'white' }}>February 05,2020</p>
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={6} tablet={12} phone={12}>
            <Card
              className="card"
              shadow={10}
              style={{
                width: 'fit-content',
                margin: 'auto',
                marginBottom: '70px',
              }}
            >
              <CardTitle
                style={{
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/xUA7aQpQ8BK4A66oJa/giphy.gif) center / cover',
                }}
              >
                <h4>
                  ECMA Script and Javascript: A Quick History Overview We All
                  Deserve!
                </h4>
              </CardTitle>
              <CardText>
                <h>
                  Learn all about the internet's most compatible programming
                  language and the history behind the web browser!
                </h>{' '}
              </CardText>
              <CardActions border>
                <a
                  href="https://medium.com/@cesarmota922/ecma-script-and-javascript-a-quick-history-overview-we-all-deserve-6190263629ca"
                  target="_blank"
                >
                  <Button colored raised ripple>
                    Read Blog
                  </Button>
                </a>
              </CardActions>
              <CardMenu>
                <p>February 25,2020</p>
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={6} phone={12} tablet={12}>
            <Card
              className="card"
              shadow={10}
              style={{
                width: 'fit-content',
                margin: 'auto',
                marginBottom: '70px',
              }}
            >
              <CardTitle
                style={{
                  color: '',
                  height: '176px',
                  background:
                    'url(https://media.giphy.com/media/l41lOKyKOS89YyJfq/giphy.gif) center / cover',
                }}
              >
                <h4>
                  Making your website Mobile Responsive using CSS Media Query
                </h4>
              </CardTitle>
              <CardText>
                <h2>
                  Learn about one of the easiest methods available to creat
                  mobile responsive wbpa
                </h2>{' '}
              </CardText>
              <CardActions border>
                <a
                  href="https://medium.com/@cesarmota922/making-your-website-mobile-responsive-using-css-media-query-becba4fb8d00"
                  target="_blank"
                >
                  <Button colored raised ripple>
                    Read Blog
                  </Button>
                </a>
              </CardActions>
              <CardMenu>
                <p>June 15,2020</p>
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      </FadeIn>
    </div>
  );
}
export default Blog;
