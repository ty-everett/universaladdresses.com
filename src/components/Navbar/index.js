import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link id='navbar__home' to='/'>Home</Link></li>
      <li><Link id='navbar__blog' to='/blog'>Blog</Link></li>
      <li>
        <Link id='navbar__member-organizations' to='/member-organizations'>
          Member Organizations
        </Link>
      </li>
      <li>
        <Link id='navbar__connect' to='/connect'>
          Connect With Us
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
