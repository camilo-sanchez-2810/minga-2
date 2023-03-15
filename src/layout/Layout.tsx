import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div>NavBar</div>
      <Outlet />
      <footer>aasd</footer>
    </>
  )
}

export default Layout