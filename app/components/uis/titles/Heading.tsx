import React from 'react'

const Heading = ({title, subTitle}:any) => {
  return (
    <span className='flex flex-col items-center justify-center mb-8'>
        <h3 className='text-theme-gray font-medium text-[22px]'>{title}</h3>
        <h3 className='text-theme-orange font-bold text-[22px]'>{subTitle}</h3>
    </span>
  )
}

export default Heading