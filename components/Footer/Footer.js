import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from "react-icons/fa";
import * as S from '../Global.styled'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center   justify-center bg-[#0F152E] pt-5 pb-7">
      <Link href="#">
        <div className="flex flex-row items-center gap-2">
          {/* <div className="relative h-16 w-16 ">
            <Image src={Logo} layout="fill" objectFit="fill" className="" />
          </div> */}
          <h3 className="text-xl sm:text-xl text-white font-semibold">
          <span className="ml-1 text-1xl sm:text-3xl flex flex-row font-bold lg:font-semibold text-white ">
            Marcelito's <span className='text-[#2676C0] ml-2'> Portfolio {">"} </span> {">"}
            </span>
          </h3>
        </div>
      </Link>
      <span className="flex flex-row items-center gap-4 py-4">

          <a href="https://www.facebook.com/marcelito.cos" target="_black">
            <BsFacebook className="text-2xl  text-[#fff]  duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
          <a href="mailto:mcosicoljr@gmail.com" target="_black">
            <FiMail className="text-2xl text-[#fff] duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
          <a href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/" target="_black">
            <FaLinkedin className="text-2xl text-[#fff] duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
      </span>
      <p className="py-3 text-xs text-white">Created by Marcelito Cosicol</p>
    </footer>
  )
}

export default Footer
