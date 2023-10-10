import React from 'react'

const TextImage = () => {
  return (
    <div>

        <section class="text-[#B6D1EA] body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img class="rounded-full w-[200px] h-[200px] mb-10 object-cover object-center" alt="hero" src="../images/id2.jpg"/>
            <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl  text-3xl mb-4 font-medium text-[#E6EFF8]">Experienced Developer</h1>
            <p class="mb-8 leading-relaxed">
                    I am a passionate and highly skilled developer specializing in web and mobile applications.
                    I have a diverse skill set that allows me to create customized solutions to meet my clients' specific needs.
                    With extensive expertise in HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, and Material-UI,
                    I excel in crafting impressive websites. <br/><br/>

                    I am also proficient in React Native and Flutter,
                    enabling me to build exceptional mobile applications. Additionally,
                    I have hands-on experience working with databases such as MySQL, MongoDB, and Firebase,
                    and I am well-versed in utilizing REST API for HTTP requests. You can trust in my commitment
                    to delivering high-quality results that surpass client expectations.
            </p>
            <div class="flex justify-center">
                <a href='https://www.linkedin.com/in/marcelito-cosicol-19288b22b/' target='_blank'>
                    <button class="inline-flex text-white bg-[#2676C0] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        See my Linkedin
                    </button>
                </a>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default TextImage
