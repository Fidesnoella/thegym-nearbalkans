import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../public/assets/icons/arrow.svg'
import decade from '../../public/assets/images/decade.png'
import target from '../../public/assets/icons/target.svg'
import rightarrow from '../../public/assets/icons/rightarrow.svg'
import leftarrow from '../../public/assets/icons/leftarrow.svg'
import essential from '../../public/assets/images/essential.png'
import contracts from '../../public/assets/images/contracts.png'
import dapps from '../../public/assets/images/dapps.png'
import media from '../../public/assets/images/media_nearGrey.png'
import certificate from '../../public/assets/images/certificate.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
    <Head>
      <title>Near Dev</title>
    </Head>
   <Navbar />
   <div className='bg-white min-h-screen pt-44 overflow-hidden'>
    <div className='bg-white px-6 lg:px-0 font-primary relative lg:pt-32 pt-12 h-600 lg:h-500 w-full'>
    <div className='bg-herobackgroundcolor absolute lg:-top-550 -top-520 opacity-40 left-0 lg:-left-48 h-full w-1/2 z-50'></div>
    <div className='bg-herobackgroundcolor absolute lg:-top-550 -top-520 opacity-40 right-0 lg:right-48 h-full w-40 z-50'></div>
    <div className='flex flex-col justify-center  lg:mx-auto container px-5 text-center items-center lg:px-60'>
       <h1 className=' w-52  md:w-full font-medium text-4xl lg:text-7xl text-lightBlak '>Get <span className=' bg-clip-text text-transparent bg-gradient-to-r from-lightBlue via-purple to-lighGreen'>NEAR</span> Certified!</h1> 
       <p className='text-center pt-5 pb-24 text-lg md:text-2xl leading-7 text-darkgray'>
       We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.
       </p>
    </div>
    <div className='flex justify-center text-center'>
    <Link href="#">
    <Image src={arrow}/> 
    </Link>
    </div>
    </div>
    <div className='justify-items-center lg:mt-16 font-primary text-center'>
    <h1 className='leading-7  font-medium text-3xl lg:text-5xl lg:leading-8 text-dark opacity-100'>Making Your NEAR <br/> learning easy.</h1>
   </div>
   <div className='mx-auto container'>
       <div className='mt-16 lg:mt-44 gap-y-4 px-6 lg:px-60 flex lg:flex-row flex-col-reverse lg:gap-x-56 items-center '>
        <div className='font-primary text-center lg:text-left grid gap-y-3'>
           <h1 className='text-dark font-medium text-2xl text-center lg:text-left lg:text-4xl leading-44'>Open NEAR wallet</h1>
           <p className='text-dark font-normal text-base lg:text-lg lg:leading-6 pt-2'>
           Opening a NEAR wallet is the first step and <br />
          essential part of joining the NEAR community<br />
          as well as starting this course.
           </p>
           <Link href="#">
            <button className='text-dark mt-3 border-dark focus:outline-none cursor-pointer border-2 leading-4 w-fit border-solid rounded-full px-5 py-3 inline-block'>Create Wallet</button>
            </Link>
        </div>
        <div className='relative lg:w-280 w-72'>
          <Image src={decade} />
          <div class="bg-nearlogo h-480 w-full max-w-480 absolute -top-2/3 z-0 left-20 hidden lg:block opacity-90 blur-xs"></div>
        </div>
       </div>
    </div>
    <div className='mx-auto container mt-12'>
     <div className='hidden lg:flex justify-center items-center '> 
      <Image src={rightarrow}/>
     </div>
     <div className='px-6 items-center gap-y-3 lg:gap-y-0 lg:px-60 flex flex-col lg:flex-row pt-5 gap-x-0 lg:gap-x-56'>
      <div className='relative'>
       <Image src={target} />
       <div class="bg-targetlogo top-38 right-70 absolute h-480 w-480 z-0 hidden lg:block  opacity-60 blur-xs"></div>
      </div>
      <div className='grid items-center'>
        <h1 className='text-dark font-medium text-2xl lg:text-4xl leading-44 text-center lg:text-start'>Complete the course</h1>
        <p className='text-lightgray text-lg leading-6 mt-6 text-center lg:text-start'>In three simple modules, learn:</p>
        <div className='flex gap-x-3 gap-y-10 lg:items-end items-center lg:flex-row flex-col mt-6'>
           <div className='lg:h-8 lg:w-8 w-8'>
            <span>
              <Image src={essential} />
            </span>
           </div>
           <p class="font-normal text-base lg:text-lg lg:leading-6  text-lightgray">Essential NEAR concepts</p>
        </div>
        <div className='flex gap-x-3 gap-y-10 lg:items-end items-center lg:flex-row flex-col mt-6'>
           <div className='lg:h-8 lg:w-8'>
            <span>
              <Image src={contracts} />
            </span>
           </div>
           <p class="font-normal text-base lg:text-lg lg:leading-6  text-lightgray flex text-center">How to write smart contracts on NEAR</p>
        </div>
        <div className='flex gap-x-3 gap-y-10 lg:items-end items-center lg:flex-row flex-col mt-6'>
           <div className='lg:h-8 lg:w-8 '>
            <span>
              <Image src={dapps} />
            </span>
           </div>
           <p class="font-normal text-base lg:text-lg lg:leading-6  text-lightgray flex text-center">How to build dapps on the NEAR blockchain</p>
        </div>
      </div>
     </div>
    </div>
    <div className='mx-auto container mt-12'>
        <div className='hidden lg:flex justify-center items-center ml-10'> 
         <Image src={leftarrow}/>
        </div>
        <div className='text-center mt-5 justify-center'>
        <h1 className='text-dark font-medium text-2xl text-center lg:text-4xl leading-44'>Claim NEAR certificate</h1>
        <p className='text-dark font-normal text-base lg:text-lg lg:leading-6 pt-2'>
        Upon course completion, receive the NEAR dev 101<br />
        certificate as an NFT on your NEAR wallet.
        </p>
        <div className='lg:w-644 h-186 lg:h-363 mt-8 lg:mt-80 mx-8 lg:mx-auto'>
         <Image src={certificate} />
        </div>
        </div>
    </div>
    <div className='flex items-center flex-col-reverse  lg:flex-row justify-between px-6 lg:px-28 mt-10 lg:mt-36'>
      <div className='relative text-center lg:text-left'>
      <h1 class="text-dark font-medium text-2xl lg:text-4xl leading-44">NEAR Development 101</h1>
      <a href="#"><button class="text-dark mt-3 border-dark focus:outline-none cursor-pointer border-2 leading-4 w-fit border-solid rounded-full px-5 py-3 inline-block">Start Course</button></a>
      <div class="bg-bottomdevelopment w-1067 h-240 top-5 -left-15 absolute hidden lg:block opacity-90 blur-sm"></div>
      </div>
      <div className='lg:w-400 lg:h-400 w-180 h-180'>
        <Image src={media} />
      </div>
    </div>
    </div>
    <Footer />
   </>
  )
}