import Image from "next/image";
import React from "react";
import Button from "../../uis/buttons/Button";

const Masthead = () => {
  return (
    <div className="relative w-full bg-theme-orangeBackground flex  flex-col lg:flex-row items-center  xl:h-[100vh] pb-16 xl:pb-0 px-6 xl:px-24 pt-20">
      <div
        data-aos="fade-right"
        className="w-full lg:w-1/2 flex flex-col lg:pr-20 xl:-mt-24"
      >
        <h3 className="text-theme-orange font-bold text-[25px] lg:text-[35px] lg:-mb-3">
          Hi, {"I'm "}
        </h3>
        <h2 className="text-theme-blue font-bold  text-[40px] lg:text-[60px] leading-[40px] lg:leading-none">
          Marcelito Cosicol{" "}
        </h2>
        <h4 className="text-theme-blue font-sm text-[18px] mt-2 lg:mt-0 lg:text-[24px]">
          Software Engineer
        </h4>
        <p className="text-theme-gray text-[16px] mt-1 lg:mt-3 lg:pr-20">
          Software Engineer with 5+ years of experience in designing,
          developing, and optimizing full-stack solutions for web and mobile
          applications. Specialized in developing robust frontend web
          applications, ensuring seamless functionality, responsive design, and
          exceptional user experiences. Experienced in building scalable backend
          API applications, creating efficient ETL processes, and enhancing data
          management. Adept at delivering end-to-end solutions that drive
          efficiency and innovation across development cycles.
        </p>
        <span className="flex flex-wrap gap-6 items-center my-6">
          <Button
            type="primary"
            text="View My CV"
            link="/../assets/files/Marcelito Cosicol Software Engineer CV.pdf"
          />
          <Button
            type="secondary"
            text="Email Me"
            link="mailto:mcosicoljr@gmail.com"
          />
        </span>
      </div>
      <div data-aos="fade-left" className="lg:w-1/2 h-full overflow-hidden ">
        <Image
          src={"/assets/images/mars1.png"}
          alt="bg"
          priority
          width={950}
          height={950}
          className="contain w-full h-full object-contain lg:scale-[110%] xl:-ml-6"
        />
      </div>
    </div>
  );
};

export default Masthead;
