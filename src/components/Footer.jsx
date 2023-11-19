/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo-bg.png'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'

function Footer() {
  return (
    <div>
        <div className='flex mx-auto w-[83rem] justify-between items-center'>
            <img className='h-[5rem] text-3xl bg-transparent' src={logo} alt="logo" />
            <div className='flex w-[8rem] justify-between'>
                <img className='h-[2rem] text-3xl bg-transparent' src={twitter} alt="logo" />
                <img className='h-[2rem] text-3xl bg-transparent' src={youtube} alt="logo" />
                <img className='h-[2rem] text-3xl bg-transparent' src={instagram} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer