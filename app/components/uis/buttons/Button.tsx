import Link from 'next/link'
import React from 'react'

const Button = ({text, type, link, className}:any) => {
    let theme = ''
    if(type == 'primary'){
        theme="bg-theme-orange text-white hover:bg-theme-blue font-medium"
    }else{
        theme="bg-transparent text-theme-orange border-2 border-theme-orange hover:bg-theme-blue hover:text-white hover:border-theme-blue"
    }
  return (
    <>
    {
      link ?
      <Link href={link} target='_blank'>
      <button className={`px-12 py-3 ${theme}  rounded-full  w-max transition duration-200 ${className} `}>
          {text}
      </button>
      </Link>

      :
      <button className={`px-12 py-3 ${theme}  rounded-full  w-max transition duration-200 ${className}`}>
          {text}
      </button>
    }
    </>
  )
}

export default Button