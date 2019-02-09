import React, { Component } from 'react';
import './App.css';

// components
import Search from './components/Search';
import Saved from './components/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Saved />
      </div>
    );
  }
}

export default App;
