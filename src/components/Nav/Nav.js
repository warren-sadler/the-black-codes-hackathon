import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <img
            className="nav-logo"
            src="https://res.cloudinary.com/dmwzkada0/image/upload/v1587804735/TBC-logo.png"
            alt="The Black Codes - Tech Community" />
        <ul className="nav-list">
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Login</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
