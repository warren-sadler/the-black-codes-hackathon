import React, { Component } from 'react';

import Card from '../Card/Card';

import './Users.scss';

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    )
  }
}

export default Users
