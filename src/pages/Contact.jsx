import React from "react";
import "../assets/contact_styles.css";

export default function Contact() {
  return (
    <div className="bg text-center">
      <div className="centered">
        <p className="firstLine">
          {" "}
          C &nbsp; O &nbsp; N &nbsp; T &nbsp; A &nbsp; C &nbsp; T &nbsp; . &nbsp; M &nbsp; E{" "}
        </p>

        <p className="secondLine">The Simplest Way To Get In Toutch!</p>

        <p>
          <input
            className="InputStyle"
            placeholder="Email me when your ready"
            style={{ fontFamily: "Arial, FontAwesome" }}
            type="text"
          />
          <input
            className="InputStyle"
            placeholder="Email me when your ready"
            style={{ fontFamily: "Arial, FontAwesome" }}
            type="text"
          />
          <input
            className="message_InputStyle"
            placeholder="Email me when your ready"
            style={{ fontFamily: "Arial, FontAwesome" }}
            type="text"
          />
        </p>
      </div>

      <div className="social-btn">
        <a href="#" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" title="Twitter">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
