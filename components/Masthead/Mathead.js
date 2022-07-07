import React from 'react'
import Image from 'next/image'
import * as S from '../Global.styled'
import Mars from '../../public/images/mars.png'
import BackgroundImage from '../../public/images/bg.png'

const Mathead = () => {
  return (
    <div className='masthead-block pointer-events-none overflow-hidden p-0 -mt-5 bg-gradient-to-r to-[#EAF0FD] lg:to-[#fff] from-[#fff]'>
        <div style={{backgroundImage:'url(../../images/bg1.png)',  backgroundRepeat:'no-repeat',}} className={`w-full flex  justify-self-end bg-[length:0]  lg:bg-cover items-end flex-col-reverse sm:flex-row flex-wrap relative pt-20 pb-0 lg:p-0`} 
        >
            <div className='w-full sm:w-2/5 lg:w-1/2 container'  >
                <div className='h-96 sm:full contain lg:h-screen  relative'>
                    <Image src={Mars} layout='fill' objectFit='cover' className='cover' />
                </div>
            </div>
            <div className='w-full  sm:mt-0  sm:w-3/5 lg:w-1/2 flex justify-center lg:h-screen items-start px-5 sm:px-0 sm:pr-12  pt-5 sm:pt-0 lg:pr-32 flex-col '>
                <h1 className='font-bold tracking-wider leading-none max-w-full  text-6xl lg:text-8xl   text-[#2676C0] py-5' ><span className='block font-bold text-5xl'>Hello I'm</span> Marcelito!</h1>
                <p className='text-[#A7A7A9] tracking-widest  sm:pb-10 opacity-100  lg:pb-0 '>
                    A passionate simple person in making web/mobile applications using most useful tech stacks that 
                    will be fit to the clients wanted output. Experienced in making website and mobile app using HTML, 
                    CSS, JAVASCRIPT,AJAX, PHP, WORDPRESS, REACT, NEXTJS, NODEJS, LARAVEL, TAILWINDCSS and MUI for website 
                    development and REACT NATIVE & FLUTTER for mobile app development and experienced using MYSQL, MONGODB and FIREBASE.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Mathead