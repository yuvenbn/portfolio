import React from 'react'

const SectionHeader = ({title}) => {
    return (
        <div className="section-title  pl-5 pt-3 mb-1">
            <h5 className="font-weight-bold">{title}</h5>
            <div className=" section-title-line d-flex align-items-center">
                <span className="circle"></span>
                <div className="hr"></div>
            </div>
        </div>
    )
}

export default SectionHeader