import React from 'react'

import Search from './pages/Search'
import Saved from './pages/Saved'


const Navbar = () => {
    return (
        <div className='navbar'>
            <h2 className='brand'>Google Books</h2>
            <navlink className='search'>
                <a href={Search}>Search</a>
            </navlink>
            <navlink className='saved'>
                <a href={Saved}>Saved</a>
            </navlink>
        </div>
    )
}

export default Navbar