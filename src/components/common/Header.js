import React from 'react'
import NavLinks from './nav/NavLinks'
import Switch from './nav/Switch'

const Header = ({isLightTheme, changeTheme}) => {
  return (
   
      <nav className="navbar  navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="/">
                    <img src="images/logo.png" alt="" width="120"></img>
                </a>
                <Switch isLightTheme={isLightTheme} onClick={changeTheme} />
                <NavLinks />
                <Switch isLightTheme={isLightTheme} onClick={changeTheme} display='d-none d-lg-block' />
            </div>
        </nav>

  )
}

export default Header