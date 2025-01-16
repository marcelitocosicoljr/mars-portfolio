"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import Image from "next/image";

const TopBar = ({
  home,
  about,
  works,
  contact,
  scrollToComponent = () => {},
}: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [tab, setTab] = useState(1);
  const isActive = " text-theme-orange hover:text-theme-orange";
  const notActive = "text-theme-blue hover:text-theme-orange";

  return (
    <div
      className={`flex w-full justify-between items-center py-1 lg:py-5 px-4 xl:px-14  fixed top-0 left-0 z-20 transition duration-200   ${
        scrollPosition != 0 ? "bg-[#fff]" : "bg-transparent"
      } `}
    >
      <span className="hidden lg:flex items-center flex-row ">
        <h2 className="text-theme-orange text-[22px] font-black">Mars</h2>
        <h2 className="text-theme-blue text-[22px] font-black">Portfolio</h2>
      </span>

      <div className="w-[45px] h-[45px]  overflow-hidden  lg:hidden">
        <Image
          src={"/assets/images/logo.png"}
          alt="bg"
          priority
          width={300}
          height={300}
          className="contain w-full h-full object-contain"
        />
      </div>

      <span className="hidden font-semibold md:flex items-center gap-10">
        <button
          onClick={() => {
            scrollToComponent(home), setTab(1);
          }}
          className={tab == 1 ? isActive : notActive}
        >
          <p className="text-[15px] ">Home</p>
        </button>
        <button
          onClick={() => {
            scrollToComponent(about), setTab(2);
          }}
          className={tab == 2 ? isActive : notActive}
        >
          <p className="text-[15px]">About Me</p>
        </button>
        <button
          onClick={() => {
            scrollToComponent(works), setTab(3);
          }}
          className={tab == 3 ? isActive : notActive}
        >
          <p className="text-[15px]">Porfolio</p>
        </button>
        <button
          onClick={() => {
            scrollToComponent(contact), setTab(4);
          }}
          className={tab == 4 ? isActive : notActive}
        >
          <p className="text-[15px]">Contact</p>
        </button>
      </span>

      <span className="flex items-center gap-4 justify-center leading-4">
        <Link href={"https://www.facebook.com/mcosicoljr"} target="_blank">
          <button className="text-theme-blue hover:text-theme-orange">
            <Icon icon="fa-brands:facebook" width={23} />
          </button>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/marcelito-cosicol-19288b22b/"}
          target="_blank"
        >
          <button className="text-theme-blue hover:text-theme-orange">
            <Icon icon="la:linkedin" width={30} />
          </button>
        </Link>
        <Link href={"mailto:mcosicoljr@gmail.com"} target="_blank">
          <button className="text-theme-blue hover:text-theme-orange">
            <Icon icon="ic:outline-email" width={27} />
          </button>
        </Link>
      </span>
    </div>
  );
};

export default TopBar;
