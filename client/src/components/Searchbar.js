import React, { Component } from 'react'

class Searchbar extends Component {
  render() {
    return (
      <div className='searchbar'>
        <h3 className='search-header'>Book Search</h3>
        <form
          onSubmit={this.onSubmit}
        >
          <label className='search-label'>
            Book
          </label>
          <input
            className='input-bar'
            type='text'
            name='name'
            id='book'
            placeholder='Search google books'
            onChange={this.onChange}
          />
          <button
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default Searchbar