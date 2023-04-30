import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      ✌️This project was coded by
      <a
        href="https://www.linkedin.com/in/kehinde-oyeronke-osoba/"
        target="_blank"
        rel="noreferrer"
        title="Kehinde's Linkedin profile"
      >
        Kehinde Oyeronke Osoba
      </a>
      and is{" "}
      <a href="https://github.com/kenmillionaire/Portfolio-Project">
        Open-Sourced on Github
      </a>{" "}
      and hosted by{" "}
      <a
        href="https://ornate-vacherin-42da36.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Netlify
      </a>
    </div>
  );
}
