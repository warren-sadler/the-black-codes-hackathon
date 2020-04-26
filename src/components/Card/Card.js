import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="card-header">
          <img src="https://www.smartheadshots.com/blog/photos/actor-headshots-1283.jpg" className="card-img" alt="woman"/>
          <p className="card-tag">UX Researcher</p>
        </div>
        <div className="card-body-header">
          <p className="card-title">Jeressia Williamson</p>
          </div>
        <div className="card-body">
          <p className="subtext">Miami, FL</p>
          <p className="card-body-text">bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio</p>
        </div>
        <button className="card-btn">View Profile</button>
      </div>
    )
  }
}

export default Card;
