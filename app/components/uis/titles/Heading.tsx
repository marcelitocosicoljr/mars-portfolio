import React from 'react'

const Heading = ({ title, subTitle }: any) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center mb-10">
      <span className="section-label mb-1">{title}</span>
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
        {subTitle}
      </h2>
      <div className="mt-4 h-1 w-14 rounded-full bg-theme-orange" />
    </div>
  )
}

export default Heading
