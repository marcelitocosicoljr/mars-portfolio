'use client'
import React from 'react'
import { Icon } from '@iconify/react';

const Features = ({ref}:any) => {
  return (
    <div data-aos="fade-up" ref={ref} className='w-[95%] lg:w-[70%] mx-auto shadow-lg py-10 md:py-5 flex flex-col sm:flex-row justify-center gap-6 md:gap-16 items-center -mt-[85px] z-10 bg-white bg-opacity-[70%] mb-20 rounded-xl mdrounded-md '>
        <div className='flex gap-2 lg:gap-6  items-center flex-col md:flex-row'>
            <div className='bg-[#F4F4F4] w-[70px] h-[70px] lg:w-[130px] lg:h-[130px] rounded-full flex justify-center items-center ' >
                <Icon icon='ph:seal-check' className=' text-theme-orange w-[45px] h-[45px]  lg:w-[75px] lg:h-[75px] ' />
            </div>
            <span className='flex flex-col items-center md:items-start justify-center md:justify-start'>
                <h3 className='text-theme-blue font-bold text-[16px] lg:text-[25px] '>Over 3 years job</h3>
                <h3 className='text-theme-orange font-medium text-[16px] lg:text-[22px]'>Experience</h3>
            </span>
        </div>
        <div className='flex gap-2 lg:gap-6 items-center flex-col md:flex-row'>
            <div className='bg-[#F4F4F4] w-[70px] h-[70px] lg:w-[130px] lg:h-[130px] rounded-full flex justify-center items-center ' >
                <Icon icon='eos-icons:project-outlined' className=' text-theme-orange w-[40px] h-[40px]  lg:w-[70px] lg:h-[70px]  ' />
            </div>
            <span className='flex flex-col items-center md:items-start justify-center md:justify-start'>
                <h3 className='text-theme-blue font-bold text-[16px] lg:text-[25px]'>26+ projects</h3>
                <h3 className='text-theme-orange font-medium text-[16px] lg:text-[22px]'>Worked On</h3>
            </span>
        </div>
    </div>
  )
}

export default Features