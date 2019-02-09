import React, { Component } from 'react';
import './App.css';

// components
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        {/* <Saved /> */}
      </div>
    );
  }
}

export default App;
