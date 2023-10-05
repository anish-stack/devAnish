import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [state, handleSubmit] = useForm("myyqblrd");
  if (state.succeeded) {
    return <p>Thanks for Contact me !</p>;
  }
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" placeholder="email" type="email" className="user" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            type="number"
            name="number"
            className="user"
            placeholder="Contact Number"
          />
          <textarea id="message" className="user" placeholder="Message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="button" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
