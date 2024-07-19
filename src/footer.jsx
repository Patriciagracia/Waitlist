import React from "react";
import Git from "./assets/Git.svg";
import Linkedin from "./assets/Linkedin.svg";
import Portfolio from "./assets/Portfolio.svg";

export default function Footer() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-5 social-icons">
        <a
          href="https://github.com/Patriciagracia"
          target="blank"
          title="GitHub profile"
          className="social-icon-wrapper"
        >
          <div className="github-icon">
            <img src={Git} alt="GitHub Logo" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/patricia-gracia/"
          target="blank"
          title="LinkedIn profile"
          className="social-icon-wrapper"
        >
          <div className="linkedin-icon">
            <img src={Linkedin} alt="Linkedin Logo" />
          </div>
        </a>
        <a
          href="https://personal-portfolio-nu-black.vercel.app/"
          target="blank"
          title="Visit my portfolio"
          className="social-icon-wrapper"
        >
          <div className="portfolio-icon">
            <img src={Portfolio} alt="Portfolio Logo" />
          </div>
        </a>
      </div>
    </div>
  );
}
