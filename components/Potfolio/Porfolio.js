import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '../../public/images/projects/1.png'

import { projectItems } from '../../lib/Projects'

const Porfolio = () => {
  return (
    <div className="container relative flex flex-col items-center justify-center py-10">
      <h4 className="uppercase">PORtFOLIO</h4>
      <h2 className="font-semibold text-center items-center text-[#292983]">All Creative Works</h2>
      <div className="relative flex w-full flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-evenly lg:justify-between py-5">
        {projectItems.map((project, idx) => (
          <div
            key={project.id}
            className={`project relative ${
              project.isApp ? 'h-72 lg:h-96' : 'h-56 sm:h-52 lg:h-60'
            }   my-5 rounded w-11/12 sm:w-[20rem] lg:w-[23rem] shadow-xl duration-300 ease-in-out sm:hover:scale-110 hover:shadow-2xl`}
            
          >
            <a href={project.url} target="_blank">
              <Image
                src={project.image}
                layout="fill"
                objectFit={`${project.isApp ? 'contain' : 'cover'}`}
                className="-z-10 rounded"
              />
              <div className="projectName absolute top-1/2 left-1/2 z-10 w-3/4 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-[#fff] to-[#C1D4FB]  p-2 opacity-90 shadow-lg ">
                <span className="flex items-center justify-center text-[#292983]">
                  {project.name}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Porfolio
