import React from 'react'
import SearchBar from './SearchBar'
import {CgProfile} from 'react-icons/cg'
import {BsFillHeartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className = "px-5 py-5 bg-[#B31B1B] flex flex-row items-center justify-between">
      <h1 className = "text-xl text-white">CU Supplies</h1>
      <SearchBar/>
      <div className = "flex flex-row items-center justify-between ">
        <CgProfile size = {35} className = "mr-2"/>
        <h1 className = "mr-2 text-lg">Vivian</h1>
        <BsFillHeartFill size = {30}/>
      </div>
    </div>
  )
}

export default Navbar