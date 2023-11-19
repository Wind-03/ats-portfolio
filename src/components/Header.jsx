/* eslint-disable no-unused-vars */
import React from 'react'
import design from '../assets/illustration-one.svg'
import motion from '../assets/icon-03.svg'
import production from '../assets/icon-02.svg'
import animation from '../assets/icon-01.svg'
import arrow from '../assets/arrow.svg'	

function Header() {
  return (
    <div className='w-[83rem] mx-auto'>
        <div className='flex justify-betweenv items-center'>
            <h1 className='text-8xl font-bold'>Experience a world of motion magic with Almighty touch Studios</h1>
            <img className='w-[29.6rem] h-[40rem]' src={design} alt=""/>
        </div>
        <div className='mt-[4rem]'>
          <h1 className='text-4xl mx-auto text-center pb-3 font-bold mb-4'>Crafting Visual Narratives</h1>
          <p className='text-[#696489] text-center text-base leading-8 mx-auto w-[55rem]'>Every project is a canvas, and motion is our paintbrush. We&apos;re not just animators; 
            we&apos;re storytellers. We take your ideas, your brand, and your message and transform them into compelling 
            narratives that connect with your audience on an emotional level.</p>
        </div>
        <div className='flex justify-between w-[70rem] mx-auto mt-4 mb-[13rem]'>
          <div className='flex items-center gap-4'>
            <img src={motion} alt="" />
            <p>Motion Graphics Design</p>
          </div>
          <img src={arrow} alt="" />
          <div className='flex items-center gap-4'>
            <img src={production} alt="" />
            <p>Video Production and Editing</p>
          </div>
          <img src={arrow} alt="" />
          <div className='flex items-center gap-4'>
            <img src={animation} alt="" />
            <p>Stellar Animation </p>
          </div>
        </div>
    </div>
  )
}

export default Header