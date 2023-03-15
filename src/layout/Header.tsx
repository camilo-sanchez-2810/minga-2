import React from 'react'
import Nav from '../components/nav/Nav'

function Header() {
  return (
    <header className='flex justify-between items-center px-2 py-1'>
      <Nav />
      <img className="w-13 h-6" src="/src/assets/Logo.png" alt="minga logo" />
    </header>
  )
}

export default Header