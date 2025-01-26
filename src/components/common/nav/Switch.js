import React from 'react'

const Switch = ({isLightTheme, display='d-lg-none', onClick}) => {
  return (
    <div className={display}>
       {/* <a onClick={onClick} className={`custom-icon me-3 bi-${isLightTheme? 'sun': 'moon'}`}></a> */}
       <button onClick={onClick} className='toggler' ><i className={`custom-ico  bi-${isLightTheme? 'sun': 'moon'}`}></i></button>
    </div>
  )
}

export default Switch