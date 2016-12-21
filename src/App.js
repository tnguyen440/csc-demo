import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
