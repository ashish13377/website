import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_S2YtNI7m7yqCGSn32Z4fN");
const Contact = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      alert("Please Fill above field first!")
    } else {
      emailjs.sendForm('service_o45u2k6', 'template_4eg8pii', e.target, 'user_S2YtNI7m7yqCGSn32Z4fN')
        .then(result => {
          console.log(result.text);
        }).catch((error) => {
          console.log(error);
        })
        alert("Message Send!")
    }
    setEmail("")
    setName("")
    setMsg("")
  }

  return (
    <div>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h2 className="contact-info-one__title">About Us </h2>
                <p className="contact-info-one__text">
                  Lorem ipsum is simply free text <br /> available in the market
                  to use <br />
                  deliver satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">Our Address</h2>
                <p className="contact-info-one__text">
                  855 Road Broklyn Street, <br />
                  600 New York, United States of <br /> America
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">Contact Info</h2>
                <p className="contact-info-one__text">
                  needhelp@kipso.com <br />
                  444 888 0000 <br /> &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Get in touch <br />
            with us
          </h2>
          <form
            onSubmit={sendEmail}
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email Address" name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Write Message" name="message" value={msg} onChange={e => setMsg(e.target.value)} ></textarea>
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result text-center"></div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14742.683528630962!2d88.4174763!3d22.5165282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30f8067b73c45d8!2sHeritage%20Institute%20of%20Technology%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1622542214623!5m2!1sen!2sin"
        className="google-map__contact"
        title="template google map"
        allowFullScreen=""
      ></iframe>
    </div>
  );
};

export default Contact;
