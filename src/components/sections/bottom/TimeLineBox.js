import React from 'react'

const TimeLineBox = ({date_range, title, institution, institution_link}) => {
  return (
    <div className="event bg-light-primary">
        <div className="date ">{date_range}</div>
           <h6>{title}</h6>
        <p> <a href={`https://${institution_link}`}>{institution}</a></p>
    </div>
  )
}

export default TimeLineBox