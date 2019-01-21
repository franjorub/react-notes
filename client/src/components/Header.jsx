import React from 'react';
import logo from '../images/logo.svg';

const Header = () => (
  <div className="container pt-4">
    <h1>
        To do App
      <img
        src={logo}
        alt="react logo"
        className="img-fluid"
        style={{ width: '1.5em' }}
      />
    </h1>
    <p>My current notes</p>
  </div>
);

export default Header;
