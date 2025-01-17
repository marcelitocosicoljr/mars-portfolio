import Image from 'next/image'
import React from 'react'

const Footer = ({home,about,works,contact, scrollToComponent = ()=>{}}:any) => {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-3 py-14 mt-16 '>
        <div className='w-[80px] h-[80px]  overflow-hidden -mb-6'>
            <Image
                src={'/assets/images/logo.png'}
                alt='bg'
                priority
                width={300}
                height={300}
                className='contain w-full h-full object-contain'
            />
        </div>
        <span className='flex items-center flex-row'>
            <h2 className='text-theme-orange text-[22px] font-black'>Mars</h2>
            <h2 className='text-theme-blue text-[22px] font-black'>Portfolio</h2>
        </span>
        <span className='flex items-center gap-4 md:gap-10'>
                <button onClick={()=>scrollToComponent(home)} className='text-theme-gray'>
                    <p className='text-[15px]'>Home</p>
                </button>
                <button onClick={()=>scrollToComponent(about)} className='text-theme-gray '>
                    <p className='text-[15px]'>About Me</p>
                </button>
                <button onClick={()=>scrollToComponent(works)} className='text-theme-gray '>
                    <p className='text-[15px]'>Porfolio</p>
                </button>
                <button onClick={()=>scrollToComponent(contact)} className='text-theme-gray '>
                    <p className='text-[15px]'>Contact</p>
                </button>

        </span>
        <p className='text-theme-gray font-light text-sm mt-8'>Created by Marcelito Cosicol</p>
    </div>
  )
}

export default Footer
