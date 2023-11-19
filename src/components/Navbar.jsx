/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo-bg.png'

function Navbar() {
  return (
    <div className=' bg-[#f7f5fd] '>
        <div className="navbar flex items-center justify-between w-[83rem] mx-auto">
                <img className='h-[5rem] text-3xl bg-transparent' src={logo} alt="logo" />
                <nav>
                    <ul className='flex justify-between font-normal  w-[25rem]'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </div>
    </div>
  )
}

export default Navbar