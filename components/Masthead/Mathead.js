import React from 'react'
import Image from 'next/image'
import * as S from '../Global.styled'
import Mars from '../../public/images/mars.png'
import BackgroundImage from '../../public/images/bg.png'

const Mathead = () => {
  return (
    <div className='masthead-block pointer-events-none overflow-hidden p-0 -mt-5 bg-gradient-to-r to-[#EAF0FD] lg:to-[#fff] from-[#fff]'>
        <div style={{
            background:'linear-gradient(rgba(15, 21, 46, 0.8), rgba(16, 52, 85, 0.8)), url("../images/ey.jpg")' ,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundColor: '#f3f3f3',
            opacity: 1
        }}
        className={`w-full flex  justify-self-end bg-[length:0] bg-[../public/images/bg.png] bg-opacity-[.5%] bg-[100%]   lg:bg-cover items-end flex-col-reverse sm:flex-row flex-wrap relative pt-20 pb-0 lg:p-0`}
        >
            {/* backgroundImage:'url(../../images/bg1.png)', */}


            <div className='w-full sm:w-2/5 lg:w-1/2 container'  >
                <div className='h-96 sm:full contain lg:h-screen  relative'>
                    <Image src={Mars} layout='fill' objectFit='cover' className='cover' />
                </div>
            </div>
            <div className='w-full  sm:mt-0  sm:w-3/5 lg:w-1/2 flex justify-center lg:h-screen items-start px-5 sm:px-0 sm:pr-12  pt-5 sm:pt-0 lg:pr-32 flex-col '>
                <h1 className='font-bold tracking-wider leading-none max-w-full  text-6xl lg:text-8xl   text-[#2676C0] pt-5' >
                    <span className='block font-bold text-5xl text-white'>Frontend</span> Developer
                </h1>
                <h1 className='font-bold tracking-wider leading-none max-w-full  text-6xl lg:text-8xl -mt-3  text-[#2676C0]' >
                    <span className='block font-bold text-5xl text-white'></span> {">"}<span className=' text-white'>{">"}</span>
                </h1>
                <p className='text-[#E6EFF8] text-[18px] mt-5 tracking-widest  sm:pb-10 opacity-100  lg:pb-0 '>


                    Frontend Developer with more than 2 years of experience in designing and developing user interfaces, testing, debugging, and structuring
                    data management within web applications. Proven ability in optimizing web and mobile application functionalities that improve data
                    retrieval and workflow efficiencies.


                </p>
            </div>
        </div>
    </div>
  )
}

export default Mathead