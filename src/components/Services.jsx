/* eslint-disable no-unused-vars */
import React from 'react'
import design from '../assets/service-one.svg'
import animate from '../assets/service-two.svg'
import edit from '../assets/service-three.svg'

function Services() {
  return (
    <div className='bg-[#F4F4F5]'>
        <h1 className='text-4xl mx-auto text-center pb-3 font-bold mb-4 pt-20'>Learn About The Services We Offer</h1>
        <div className='flex w-[65rem] mx-auto justify-between items-center'>
          <div className='w-96 border-red-400'>
            <p className='text-[#044FE7] uppercase font-bold tracking-wider'>We design</p>
            <h1 className='font-bold text-4xl pb-5 pt-3'>We Design Superior Motion Graphics</h1>
            <p>We make designs that transform  concepts into vibrant visual masterpieces that engage, inform and mesmerize.</p>
          </div>
          <img className='w-[29.6rem] h-[40rem]' src={design} alt="" />
        </div>
        <div className='flex w-[65rem] mx-auto justify-between items-center'>
          <img className='w-[29.6rem] h-[40rem]' src={animate} alt="" />
          <div className='w-[27rem]'>
            <p className='text-[#044FE7] uppercase font-bold tracking-wider'>We Give life to your dreams</p>
            <h1 className='font-bold text-4xl pb-5 pt-3'>We Help your Business Grow With PrizeWinning Animation</h1>
            <p>We breathe life into dreams. With each project, we embark on a journey – your journey. 
It begins with understanding your vision, a dash of innovation, a sprinkle of ingenuity, and a generous helping of cinematic enchantment</p>
          </div>
        </div>
        <div className='flex w-[65rem] mx-auto justify-between items-center'>
          <div className='w-[34rem]'>
            <p className='text-[#044FE7] uppercase font-bold tracking-wider'>Achieve Success</p>
            <h1 className='font-bold text-4xl pb-5 pt-3'>Video Production and Editing to help you grow</h1>
            <p>Crafting polished and impactful video content for a lasting impression.
               We are a full-service video production company that creates engaging visual content for your brand.
            </p>
          </div>
          <img className='w-[29.6rem] h-[40rem]' src={edit} alt="" />
        </div>
    </div>
  )
}

export default Services