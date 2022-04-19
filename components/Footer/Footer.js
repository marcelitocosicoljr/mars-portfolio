import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import * as S from '../Global.styled'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center   justify-center bg-[#292983] pt-5 pb-7">
      <Link href="#">
        <div className="flex flex-row items-center gap-2">
          <div className="relative h-16 w-16 ">
            <Image src={Logo} layout="fill" objectFit="fill" className="" />
          </div>
          <h3 className="text-xl text-white ">MarsPorfolio</h3>
        </div>
      </Link>
      <span className="flex flex-row items-center gap-4 py-4">
        <Link href="#">
          <a href="https://www.facebook.com/marcelito.cos" target="_black">
            <BsFacebook className="text-2xl  text-[#fff]  duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
        </Link>
        <Link href="#">
          <a href="mailto:mcosicoljr@gmail.com" target="_black">
            <FiMail className="text-2xl text-[#fff] duration-500 ease-out hover:scale-125 hover:text-[#EAF0FD]" />
          </a>
        </Link>
      </span>
      <div className="flex flex-col items-center sm:flex-row sm:py-2 ">
        <Link href="#">
          <S.NavLink href="facebook.com" className="my-0 text-xs text-white">
            Home
          </S.NavLink>
        </Link>
        <span className="hidden text-xs text-white sm:block">|</span>
        <Link href="#">
          <S.NavLink className="my-0 text-xs text-white">About</S.NavLink>
        </Link>
        <span className="hidden text-xs text-white sm:block">|</span>
        <Link href="#">
          <S.NavLink className="my-0 text-xs text-white">Projects</S.NavLink>
        </Link>
        <span className="hidden text-xs text-white sm:block">|</span>
        <Link href="#">
          <S.NavLink className="my-0 text-xs text-white">Gallery</S.NavLink>
        </Link>
        <span className="hidden text-xs text-white sm:block">|</span>
        <Link href="#">
          <S.NavLink className="my-0 text-xs text-white">Contact</S.NavLink>
        </Link>
      </div>
      <p className="py-3 text-xs text-white">Created by Marcelito Cosicol</p>
    </footer>
  )
}

export default Footer
