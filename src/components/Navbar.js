import React from 'react'
import Image from 'next/image'
import decade from '../../public/assets/icons/decade.svg'
import near from '../../public/assets/icons/near.svg'
import balkans from '../../public/assets/icons/balkans.svg'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='relative'>
    <div className='bg-white w-full fixed top-0 z-99'>
      <nav className='mx-auto container items-center  px-5 flex justify-between my-5 lg:hidden'>
          <div className='flex gap-x-2'> 
            <div><Image src={decade} className='w-8'/></div>
            <div className='border-gray-200 border-solid border-r-2'></div>
            <div><Image src={near}  /></div>
          </div>
          <div>
            <Link href="/course">
            <button className='bg-zinc-700 text-white focus:outline-none cursor-pointer leading-4 w-fit border-solid rounded-full px-5 py-3 inline-block'>Create Wallet</button>
            </Link>
          </div>
      </nav>
      <nav className='hidden lg:flex mx-auto container items-center px-32 justify-between my-5'>
         <div className='flex items-center'>
            <Link href="#">
            <div className='flex items-center'>  
               <span>
               <Image src={decade} className='w-10'/>
               </span>
               <span className='ml-2 font-bold text-zinc-700 text-lg'>
                Decade
               </span>
            </div>
            </Link>
            <div className='border-gray-200 border-solid h-12 border-r-2 mx-2' ></div>
            <Link href="#">
               <Image src={balkans}/> 
            </Link>
         </div>
         <div className='font-primary flex gap-x-10 text-black  items-center font-normal ml-auto text-lg'>
            <Link href="/course">
            <button className='bg-transparent border-none focus:outline-none cursor-pointer leading-4 rounded-full px-5 py-5 text-lg'>Start The Course</button>
            </Link>
            <Link href="/wallet">
            <button className='bg-zinc-700 text-white focus:outline-none cursor-pointer leading-4  border-solid rounded-full px-5 py-3 inline-block'>Create Wallet</button>
            </Link>
         </div>
      </nav>

    </div>
    </div>
  )
}

export default Navbar

