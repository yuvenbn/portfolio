import React from 'react'

const Link = ({name, icon, url}) => {
  return (

     <li className="nav-item">
        <a className="nav-link p-1" href={  url }> <i className={'bi bi-' + icon}></i> {name}</a>
     </li>

  )
}

export default Link