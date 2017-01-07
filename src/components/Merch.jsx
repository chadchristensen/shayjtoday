import React, { Component } from 'react';
let currentPage = "merch";
require('./Merch.scss');

class Merch extends Component {
  render() {
    return (
      <div id={currentPage} className="main-content">
        <h2 className="page-title">{this.props.route.title}</h2>
        <div className="container">
          <p id="coming-soon">Coming Soon!</p>
        </div>
      </div>
    );
  }
}

export default Merch;
