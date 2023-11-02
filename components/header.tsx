import React from 'react'

import Link from 'next/link'
import { ButtonLink } from '@/components/ui/button-link'

export default function Header () {
  return (
    <header className='w-full z-10 relative'>
        <div className='max-w-[1200px] m-auto flex justify-between items-center px-10'>
          
          <Link href='/'>
            <img src="/logo.png" width={350} alt="logo" />
          </Link>
            
          <nav className='md:flex'>
            <ButtonLink className='ml-10 text-xl' href='/'>Home</ButtonLink>
            <ButtonLink className='ml-10 text-xl' href='/character'>Characters</ButtonLink>
            <ButtonLink className='ml-10 text-xl' href='/favorites'>Favorites</ButtonLink>					
          </nav>

        </div> 

    </header>
  )
}
