import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code Crafters
        </a>
      </section>

      <section className="Footer__Items">

        <a
          href="https://github.com/Rishivarma99/sorting-visualizer-CodeCrafters"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
