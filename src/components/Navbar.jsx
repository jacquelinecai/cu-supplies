import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className = "px-5 py-5 bg-[#B31B1B] flex flex-row items-center justify-between">
      <h1 className = "text-xl text-white">CU Supplies</h1>
      <SearchBar />
    </div>
  )
}

export default Navbar