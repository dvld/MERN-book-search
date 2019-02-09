import React, { Component } from 'react'

// components
import Navbar from '../Navbar'
import Jumbotron from '../Jumbotron'
import Searchbar from '../Searchbar'

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Searchbar />
      </div>
    )
  }
}

export default Search