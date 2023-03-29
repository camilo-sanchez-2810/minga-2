import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [toggle, setToggle] = useState<Boolean>(false)
  const handleToggle: React.MouseEventHandler = (): void => {
    setToggle(!toggle)
  }
  return (
    <div>
      <button className='text-indigo-700 text-xl' onClick={handleToggle}><FontAwesomeIcon icon={faBars}/></button>
      <nav className={`fixed p-5 inset-0 duration-1000 ${toggle ? 'translate-x-0' : 'translate-x-[-100%]'} h-screen w-full md:max-w-md bg-indigo-700 text-white`}>
        <div className='flex justify-between align-center'>
          <div className='flex gap-3'>
            <img className='w-[50px] h-[50] rounded-full' src="https://dummyimage.com/600x400/000/fff&text=A" alt="User profile picture" />
            <div>
              <p>User name</p>
              <p>Email</p>
            </div>
          </div>
          <button className='text-2xl' onClick={handleToggle}><FontAwesomeIcon icon={faXmark}/></button>
        </div>
        <div className='mt-6'>
          <NavLink className='p-1 block rounded-md font-semibold' to="/">Home</NavLink>
          <NavLink className='p-1 block rounded-md font-semibold' to="/comics">Comics</NavLink>
          <NavLink className='p-1 block rounded-md font-semibold' to="/login">Login</NavLink>
          <NavLink className='p-1 block rounded-md font-semibold' to="/signup">Signup</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Nav