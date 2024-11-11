import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t border-white mt-40 p-10 text-white flex flex-col items-center'>
        <p className='mb-4'>arcade@example.com</p>
        <div className='inline-flex gap-4 mb-4'>
            <Image src="/instagram.svg" alt='Icon'
            width={25} height={25} className='cursor-pointer'></Image>
            <Image src="/facebook.svg" alt='Icon'
            width={25} height={25} className='cursor-pointer'></Image>
            <Image src="/reddit.svg" alt='Icon'
            width={25} height={25} className='cursor-pointer'></Image>
        </div>

        <Link href="/" className='underline underline-offset-2 mb-4 hover:no-underline'>Cookies Policy</Link>
        <Link href="/" className='underline underline-offset-2 hover:no-underline'>Privacy Policy</Link>
    </footer>
  )
}

export default Footer