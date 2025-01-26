import React from 'react'
import ProjectList from './projects/ProjectList'
import SectionHeader from './SectionHeader'

const Projects = () => {
  return (
    <section className="my-works section-padding">
        <div className="container">

          <SectionHeader title={'My Works'} />
          <ProjectList />

        </div>
    </section>
  )
}

export default Projects