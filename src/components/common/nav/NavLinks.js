import React from 'react'
import Link from './Link'

const NavLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
            <Link name='Projects' icon='stack' url='/projects' />
            <Link name='My Stack' icon='box' url='/stack' />
            <Link name='Resume' icon='file-earmark' url='/resume' />
        </ul>
   </div>
  )
}

export default NavLinks