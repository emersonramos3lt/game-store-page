import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer border-t border-white mt-[13rem] p-[3rem]'>
        <div className='flex justify-between items-center text-white'>
          <Link href="/" className='hover:underline decoration-2 underline-offset-2 mb-3'>GAMES</Link>
          <Link href="/" className='hover:underline decoration-2 underline-offset-2 mb-3'>ABOUT AND CONTACT</Link>

         <div className='inline-flex flex-row items-center justify-center gap-[1rem]'>
         <Image 
          src="/instagram.svg" 
          alt='Instagram icon'
          width={25} 
          height={25} className='cursor-pointer'/>
          <Image 
          src="/facebook.svg" 
          alt='Facebook icon'
          width={25} 
          height={25} className='cursor-pointer'/>
          <Image 
          src="/reddit.svg" 
          alt='Reddit icon'
          width={25} 
          height={25} className='cursor-pointer'/>
         </div>
        </div>

        <div className='container-footer flex justify-between text-white mt-[7rem]'>
        
        <div className='privacy-footer'>
          <Link href="/" className='privacy-link hover:underline decoration-2 underline-offset-2 mr-8 '>PRIVACY POLICY</Link>

          <Link href="/" className='hover:underline decoration-2 underline-offset-2 '>COOKIE POLICY</Link>
        </div>

        <div className='back-container'>
          <Link href="#header" className='inline-flex underline decoration-2 underline-offset-2 gap-[.3rem] hover:no-underline'>
          <Image 
          src="/arrow.svg" 
          alt='Arrow icon'
          width={15} 
          height={15} className='cursor-pointer'/> BACK TO TOP</Link>
        </div>

        </div>
    </footer>
  )
}

export default Footer
