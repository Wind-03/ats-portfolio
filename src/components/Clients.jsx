/* eslint-disable no-unused-vars */
import React from 'react'
import quote from '../assets/quote.svg'

function Clients() {
  return (
    <div className='mb-[10rem]'>
        <h1 className='mx-auto text-center text-4xl font-bold w-[41rem] pt-[13rem] leading-10'>Find out what our most successful clients have to say about us </h1>
        <p className='py-6 mb-20 mx-auto text-center text-[#323232]'>It’s always the best source to hear from others who have already worked with us.</p>
        <div className='flex flex-wrap w-[89rem] mx-auto'>
            <div className='card border-[#DDD] w-[40rem] py-7 px-8 pl-10 mr-10 ml-10 mb-14 border border-[#ddd] rounded-[40px]'>
                <img src={quote} alt="" className='pb-4' />
                <p className='pb-4 text-2xl'>Wow, the motion design you created for our product launch was beyond our expectations! 
                    The energy and creativity you brought to the project truly captured the essence of our brand. 
                    We&apos;ve received so much positive feedback from our audience.
                </p>
                <p className='pb-4 text-2xl'>-John Doe</p>
            </div>
            <div className='card border-[#DDD] w-[40rem] py-7 px-8 pl-10 mb-14 border border-[#ddd] rounded-[40px]'>
                <img src={quote} alt="" className='pb-4' />
                <p className='pb-4 text-2xl' >The motion design exceeded our expectations! It brought a level of energy and excitement to our call for volunteers that we hadn&apos;t anticipated. 
                    The professionalism in both the design and the script truly showcased the dedication to our cause. Kudos on a job well done!
                </p>
                <p className='pb-4 text-2xl' >-John Doe</p>
            </div>
            <div className='card border-[#DDD] w-[40rem] py-7 px-8 pl-10 mr-10 ml-10 border border-[#ddd] rounded-[40px]'>
                <img src={quote} alt="" className='pb-4' />
                <p className='pb-4 text-2xl' >The attention to detail in the motion design was outstanding. 
                    It perfectly conveyed the message we wanted to communicate and added a dynamic edge to our marketing efforts. 
                    Kudos to your team for a job well done
                </p>
                <p className='pb-4 text-2xl' >-John Doe</p>
            </div>
            <div className='card border-[#DDD] w-[40rem] py-7 px-8 pl-10 border border-[#ddd] rounded-[40px]'>
                <img src={quote} alt="" className='pb-4' />
                <p className='pb-4 text-2xl' >Working with your motion design service was a breeze. 
                    The team was responsive, understood our vision, and delivered a product that not only met but exceeded our requirements. 
                    We&apos;re looking forward to collaborating on future projects
                </p>
                <p className='pb-4 text-2xl' >-John Doe</p>
            </div>
        </div>
    </div>
  )
}

export default Clients