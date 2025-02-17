'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Button from '../../uis/buttons/Button';

const MobileProject = ({image, title, tasks, link}:any) => {
  return (
    <div className='w-full lg:w-[35%] mx-auto py-5 px-2 lg:px-0 flex justify-center gap-4 items-center flex-col lg:flex-row '>
        <div  className='w-full mx-auto lg:w-[60%]  h-full overflow-hidden  rounded-md shadow-xl  '>
            <Image
                src={image}
                alt='bg'
                priority
                width={1800}
                height={1800}
                className=' w-full h-full object-contain'
            />
        </div>
        <span className=' flex w-max flex-col items-center lg:items-start justify-center md:justify-start'>
                <h3 className='text-theme-blue font-bold text-[25px]'>{title}</h3>
                {
                    tasks &&
                    tasks?.map((item:any, index:number)=>(
                        <h3 key={index} className='text-theme-gray text-[18px]'>{item}</h3>
                    ))
                }
                {
                    link &&
                    <Button text='View Website' type='primary' link={link} className='mt-4' />
                }

        </span>
    </div>
  )
}

export default MobileProject
