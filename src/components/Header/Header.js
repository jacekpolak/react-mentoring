import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header-title">To-Do List</h1>
        <Filter />
      </div>
    );
  }
}

export default Header;
