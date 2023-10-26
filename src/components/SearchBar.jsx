import React from 'react'

import {FaSearch} from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className = "bg-white flex flex-row items-center rounded-xl h-10 w-3/6 mr-3">
      <FaSearch id = "search-icon" className = "mx-2"/>
      <input placeholder='Search' className="border-none w-[63%] bg-transparent outline-none"/>
    </div>
  )
}

export default SearchBar