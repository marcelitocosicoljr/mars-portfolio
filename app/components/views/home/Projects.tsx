import React from 'react'
import Project from './Project'
import SmallProject from './SmallProject'
import MobileProject from './MobileProject'
import Heading from '../../uis/titles/Heading'

const Projects = () => {
  return (
    <div className='w-full flex flex-wrap gap-2 items-centerjustify-center'>
        <Project image='/assets/images/projects/farmkonekt.png' title='Farm Konekt' tasks={["Designed UI/UX", "Developed Web App"]} />
        <Project image='/assets/images/projects/fksite.png' title='Farm Konekt Website' tasks={["UI/UX Lead", "Maintained Web App"]} link='https://farmkonek.com/' />

        <Project image='/assets/images/projects/studportal.png' title='Student Portal' tasks={["Designed UI/UX", "Developed Web App"]} />
        <Project image='/assets/images/projects/psuweb.png' title='PSU Registrar Website' tasks={["Designed UI/UX", "Developed Web App"]} link='https://ourpsu.com/' />

        <Project image='/assets/images/projects/istopp.png' title='ISTOPP Web App' tasks={["(Information System on Transport Operations in Puerto Princesa)", "Developed Web App","Integrate Data"]} />

        <Project image='/assets/images/projects/house.png' title='Housination' tasks={["Developed Web App"]} link='https://housination.com/' />

        <Project image='/assets/images/projects/grate.png' title='Grate New Castle' tasks={["Developed Web App", "Maintained Web App"]}  />

        <Project image='/assets/images/projects/scott.png' title='Scottbros' tasks={["Maintained Web App"]} link='https://scottbros.com/' />


        <SmallProject image='/assets/images/projects/4.png' title='TL Competitions' tasks={["Developed Web App"]}  />
        <SmallProject image='/assets/images/projects/5.png' title='Australia Workers' tasks={["Developed Web App"]} link='https://australiaworkers.com/'  />

        <Project image='/assets/images/projects/next.png' title='NextGen Sports Camp' tasks={["Developed Web App", "Maintained Web App"]} link='https://nextgensportscamps.co.uk/clubs/' />

        <Project image='/assets/images/projects/babylon.png' title='Babylon Durham' tasks={["Maintained Web App"]} link='https://babylondurham.com/' />
        <Project image='/assets/images/projects/basilico.png' title='Basilico' tasks={["Developed Web App"]} link='https://basilico.co.uk/' />

        <SmallProject image='/assets/images/projects/carwan.png' title='Carwan Gallery' tasks={["Maintained Web App"]}   link='https://carwangallery.com/'  />
        <SmallProject image='/assets/images/projects/10.png' title='Remora' tasks={["Maintained Web App"]}   />


        <SmallProject image='/assets/images/projects/loftd.png' title='Loft Durham' tasks={["Maintained Web App"]} link='https://loftdurham.co.uk/'  />
        <SmallProject image='/assets/images/projects/12.png' title='GHB Consultancy' tasks={["Maintained Web App"]}    />
        <SmallProject image='/assets/images/projects/wilder.png' title='Wilder Events' tasks={["Maintained Web App"]}   link='https://www.wilderevents.co.uk/'  />
        <SmallProject image='/assets/images/projects/sdj.png' title='Super DJ Game' tasks={["Developed Web App"]}   link='https://staging2.superstardjgame.com/'  />

        <div className='w-full py-6 mt-6'>
        <Heading title='Developed Mobile Applications' subTitle='For Prototypes' />
        </div>


        <MobileProject image='/assets/images/projects/app1.jpg' title='Need4Sped App' tasks={["Developed Mobile App"]}  />
        <MobileProject image='/assets/images/projects/myphone.jpg' title='My Phone App' tasks={["Developed Mobile App"]}  />

        <div className='w-full py-6 mt-6'>
            <Heading title='Developed Web Apps' subTitle='Mobile Responsive' />
        </div>

        <MobileProject image='/assets/images/projects/fkmobile.png' title='Farm Konekt Web App' tasks={["Developed Web App"]}  />
        <MobileProject image='/assets/images/projects/student.jpg' title='PSU Student Portal' tasks={["Developed Web App"]}  />
        <MobileProject image='/assets/images/projects/psuwebmobile.png' title='PSU Registrar Portal' tasks={["Developed Web App"]}  />



    </div>
  )
}

export default Projects