import React from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import FadeIn from 'react-fade-in';
import contactAvatar from '../assets/icons/contactAvatar.jpg';
import textBox from '../assets/icons/textBoxx.png';

const Contact = () => {
  return (
    <div>
      <FadeIn transitionDuration="1800">
        <h1>Contact Me!</h1>
        <Cell col={8} offset="2">
          <h5 style={{ marginTop: '-10px', marginBottom: '80px' }}>
            You can Find hyperlinks to my social media accounts and my resume
            down below. For a faster response , I can be reached via telephone
            at (773)-664-5734
          </h5>
        </Cell>
        <Grid
          className="about"
          style={{
            backgroundColor: 'white',
            color: 'black',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <Cell col={3} phone={12} tablet={12}>
            <FadeIn transitionDuration="1800">
              <img src={contactAvatar} alt="cesar's avatar" height="400px" />
            </FadeIn>
            <FadeIn transitionDuration="11800">
              <img
                src={textBox}
                alt="textbox"
                height="160px"
                style={{
                  marginBottom: '0px',
                  marginTop: '-650px',
                  marginLeft: '280px',
                  transform: 'scaleX(-1)',
                }}
              />
              <h2
                style={{
                  marginTop: '-380px',
                  marginLeft: '305px',
                }}
              >
                Hello!
              </h2>
            </FadeIn>
          </Cell>

          <Cell
            shadow={10}
            offsetDesktop={2}
            className="contactForm "
            col={6}
            phone={12}
            tablet={12}
          >
            <form method="POST" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="fields">
                <div className="field half ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    style={{
                      width: '400px',
                      marginBottom: '30px',
                      height: '35px',
                    }}
                  />
                </div>
                <div className="field half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    style={{
                      width: '400px',
                      marginBottom: '30px',
                      height: '35px',
                    }}
                  />
                </div>

                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="7"
                    style={{ width: '400px' }}
                  ></textarea>
                </div>
                <div className="field">
                  <label>
                    Send File:{' '}
                    <input
                      type="file"
                      name="myfile"
                      id="myfile"
                      placeholder="Upload File"
                      rows="7"
                    />
                  </label>
                </div>
                <div className="field" style={{ marginBottom: '60px' }}>
                  <div data-netlify-recaptcha="true"></div>
                </div>

                <Button type="submit" raised ripple colored>
                  Send
                </Button>
              </div>
            </form>
          </Cell>
        </Grid>
      </FadeIn>
    </div>
  );
};
export default Contact;
