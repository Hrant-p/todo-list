import React from 'react';
import redux from '../img/redux.icon.png';

function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-end wow pulse infinite slower">
        <h6>
                    Made with
          {' '}
          <i className="fab fa-react" />
          {' '}
                    &
          {' '}
          <img width="16px" src={redux} alt="redux" />
          {' '}
                    by
          {' '}
          <a href="https://github.com/Hrant-p">Hrant</a>
        </h6>
      </div>
    </div>
  );
}

export default Footer;
