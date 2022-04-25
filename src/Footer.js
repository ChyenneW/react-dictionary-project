import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        This project was coded by{" "}
        <a
          href="www.linkedin.com/in/chyennew"
          target="_blank"
          className="footerLink"
          rel="noreferrer"
        >
          Chyenne Williams
        </a>{" "}
        and is
        <a
          href="https://github.com/ChyenneW/react-dictionary-project"
          target="_blank"
          className="footerLink"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
