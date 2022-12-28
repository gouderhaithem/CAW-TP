// <-- import styles to be used
import React from "react";
import logopng from "../images/logopng.png";
import { Wave } from "react-animated-text";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Homepage() {
  return (
    <div className="home-page-content">
      <h1>
        <Wave
          effect="stretch"
          effectChange="1.5"
          effectDirection="both"
          iterations="1"
          text="I am GOUDER HAITHEM"
        />
      </h1>

      <h2>
        <Wave
          effect="verticalFadeIn"
          effectChange="1.5"
          effectDirection="both"
          iterations="1"
          text="Welcome to my page"
        />
      </h2>
      <h3>
        you can browse my page with
        <span>
          <a href="/contacts"> Contacts</a>
        </span>{" "}
        or
        <span>
          <a href="/blog"> Blogs </a>
        </span>{" "}
        links
      </h3>
      <a href="">
        <img
          style={{ height: "100px" }}
          className="logo-img"
          src={logopng}
          alt="logo"
        />
      </a>

      <div className="social-media"></div>
    </div>
  );
}
export default Homepage;
