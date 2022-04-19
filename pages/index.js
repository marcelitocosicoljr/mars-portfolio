
import Head from 'next/head'
import Image from 'next/image'
import AppBar from '../components/AppBar/AppBar'
import Mathead from '../components/Masthead/Mathead'
import Footer from '../components/Footer/Footer'
import Porfolio from '../components/Potfolio/Porfolio'



const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-3 sm:pt-4 ">
      <Head>
        <title>Mars Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-1 flex-col ">
        <header className='sm:15 lg:px-20'>
          <AppBar/>
        </header>
        <Mathead/>
        <Porfolio/>
      </main>

      <Footer/>

    </div>
  )
}

export default Home
