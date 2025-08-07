import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    // This outer div is the flex container for the hero sections
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* hero left  */}
      {/* This div contains the text content on the left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'> Get Your Veggies</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Harvest of the Week</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>Farm Fresh to Your Table</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* hero right side */}
      {/* THIS IS THE KEY CHANGE: Added 'max-w-full' to the image */}
      {/* 'max-w-full' ensures the image never exceeds its parent's width */}
      <img className='w-full sm:w-1/2 max-w-full' src={assets.hero_img} alt="Hero Image" />
    </div>
  )
}

export default Hero
