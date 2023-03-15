import React, { useState } from 'react'

function Nav() {
  const [toggle, setToggle] = useState<Boolean>(false)
  const handleToggle: React.MouseEventHandler = (): void => {
    setToggle(!toggle)
  }
  return (
    <div>
      <button onClick={handleToggle}>show navbar</button>
      <nav className={`fixed inset-0 duration-1000 ${toggle ? 'translate-x-0' : 'translate-x-[-100%]'} h-screen w-full bg-indigo-700`}>
        <button onClick={handleToggle}>x</button>
      </nav>
    </div>
  )
}

export default Nav