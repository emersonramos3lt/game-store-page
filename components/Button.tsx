import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  className?: string;
}

const Button = () => {
  return (
    <button className=''>
        <Link href="#products" className='bg-mySecondary p-8 rounded-xl text-xl border transition-colors border-mySecondary hover:bg-transparent hover:text-mySecondary'>Buy Now!</Link>
    </button>
  )
}

export default Button