import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'

class Navigation extends Component {

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li><IndexLink to="/countdown" activeClassName="active-link">Countdown</IndexLink></li>
            <li><IndexLink to="/about" activeClassName="active-link">About</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by<a href="https://github.com/ajames20" target="_blank"> Andrew James</a>
            </li>
          </ul>
        </div>
      </div >
    );
  }
}

export default Navigation;