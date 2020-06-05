import React from 'react';
import { Grid, Cell } from 'react-mdl';
import FadeIn from 'react-fade-in';
import contactAvatar from '../assets/icons/contactAvatar.jpg';
import textBox from '../assets/icons/textBoxx.png';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <FadeIn transitionDuration="1800">
        <h1>Contact!</h1>
        <FadeIn transitionDuration="7800">
          <h2
            style={{
              marginBottom: '-110px',
              // marginTop: '-550px',
              marginLeft: '-580px',
            }}
          >
            Hello!
          </h2>
        </FadeIn>
        <Grid>
          <Cell col={3}>
            <FadeIn transitionDuration="11800">
              <h2
                style={{
                  marginBottom: '-90px',
                  // marginTop: '-550px',
                  marginLeft: '330px',
                }}
              >
                Hello!
              </h2>
            </FadeIn>
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
                  marginLeft: '310px',
                  transform: 'scaleX(-1)',
                }}
              />
            </FadeIn>
          </Cell>

          <Cell
            offset={0}
            className="contactForm"
            col={6}
            phone="12"
            tablet={12}
          >
            <form name="contact" method="POST" data-netlify="true">
              <div className="fields">
                <div className="field half">
                  {/* <label>
                    Your Name:{' '} */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  {/* </label> */}
                </div>
                <div className="field half">
                  {/* <label>
                    Your Email:{' '} */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  {/* </label> */}
                </div>

                <div className="field">
                  {/* <label>
                    Message:{' '} */}
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="7"
                    ></textarea>
                  {/* </label> */}
                </div>
                <div className="field">
                  {/* <label>
                    Message:{' '} */}
                    <input
                      type="file"
                      name="myfile"
                      id="myfile"
                      placeholder="Upload File"
                      rows="7"
                    />
                  {/* </label> */}
                </div>
                <div className="field">
                  <div data-netlify-recaptcha="true">
                    <h1>j</h1>
                  </div>
                </div>

                <button type="submit">Send</button>
              </div>
            </form>
          </Cell>
        </Grid>
      </FadeIn>
    </div>
  );
};
export default Contact;
