import React from 'react'

const ProjectCard = ({name, thumbnail, tools, slug}) => {
  return (
    <div className="col-md-4  mb-4 ">
        <div className="card project-card  shadow">
            <a href={`/projects/${slug}`}>
                <img src={`images/thumbnails/${thumbnail}`} className=" w-100  card-img-top" alt={name}></img>          
                <div className="overlay">
                    <h6 className="m-0">{name}</h6>
                    <p>{tools}</p>
                </div>
            </a>
        </div>
   </div>
  )
}

export default ProjectCard