import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                    <img src="./amazon_PNG25.png" alt=" " />
                    </div>
                    <div className="nav_searchbar">
                        <input type="text" name="navsearchbar" id="searchbar" />
                        <div className="search_icon">
                            <SearchIcon id="searchicon"/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    
                </div>
            </nav>
    </header>
  )
}

export default Navbar