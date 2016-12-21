import React, { Component } from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Title</h1>
        <p>React Redux</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

export default HomePage;
