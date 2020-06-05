import React from 'react';

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state);
};
const Contact = () => {
  return (
    <div>
      <h1>Contact!</h1>
      <form name="contact" method="POST" data-netlify="true">
        <div className="fields">
          <div className="field half">
            {/* <p> */}
            <label>
              Your Name:{' '}
              <input type="text" name="name" id="name" placeholder="Name" />
            </label>
            {/* </p> */}
          </div>
          <div className="field half">
          <p>
            <label>
              Your Email: <input type="email" name="email" id="email" placeholder="Email" />
            </label>
          </p>
          </div>
          {/* <p>
            <label>
              Your Role:{' '}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p> */}
          <div className="field">
            <p>
              <label>
                Message:{' '}
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="7"
                ></textarea>
              </label>
            </p>
          </div>
          <div className="field">
            {/* <p> */}
            <label>
              Message:{' '}
              <input
                type="file"
                name="myfile"
                id="myfile"
                placeholder="Upload File"
                rows="7"
              ></input>
            </label>
            {/* </p> */}
          </div>
          <div className="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Contact;
