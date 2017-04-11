import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <input type="checkbox"/> Show done
        <input type="search" placeholder="Search"/> 
      </div>
    );
  }
}
