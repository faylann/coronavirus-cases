import React, { Component } from 'react';
import logo from '../github-light.png';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="main-nav">
          <ul className="right-menu">
            <li>
              <a href="https://github.com/aldofadillaputra/coronavirus-cases">
                <img src={logo} alt="logo" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
