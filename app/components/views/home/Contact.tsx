"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 items-center py-4">
      <a
        data-aos="fade-up"
        href="tel:+639397509659"
        target="_blank"
        className="w-[180px] h-[170px] rounded-md shadow-xl bg-white flex flex-col justify-center items-center gap-6 text-theme-blue hover:text-theme-orange hover:scale-110 transition duration-150"
      >
        <Icon icon="tdesign:call" width={50} />
        <p className=" text-[12px] font-medium  items-center">
          (+63) 939 750 9659
        </p>
      </a>
      <a
        data-aos="fade-up"
        href="mailto:mcosicoljr@gmail.com"
        target="_blank"
        className="w-[180px] h-[170px] rounded-md shadow-xl bg-white flex flex-col justify-center items-center gap-6  text-theme-blue hover:text-theme-orange hover:scale-110 transition duration-150"
      >
        <Icon icon="ic:outline-email" width={50} />
        <p className=" text-[12px] font-medium  items-center">Email Me</p>
      </a>
      <a
        data-aos="fade-up"
        href="https://www.facebook.com/mcosicoljr"
        target="_blank"
        className="w-[180px] h-[170px] rounded-md shadow-xl bg-white flex flex-col justify-center items-center gap-6  text-theme-blue hover:text-theme-orange hover:scale-110 transition duration-150"
      >
        <Icon icon="fa-brands:facebook" width={50} />
        <p className=" text-[12px] font-medium  items-center">
          View my Facebook
        </p>
      </a>
      <a
        data-aos="fade-up"
        href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/"
        target="_blank"
        className="w-[180px] h-[170px] rounded-md shadow-xl bg-white flex flex-col justify-center items-center gap-6  text-theme-blue hover:text-theme-orange hover:scale-110 transition duration-150"
      >
        <Icon icon="la:linkedin" width={50} />
        <p className=" text-[12px] font-medium  items-center">
          View my Linkedin
        </p>
      </a>
    </div>
  );
};

export default Contact;
