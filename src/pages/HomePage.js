import React from 'react'

import Introduction from '../components/sections/Introduction';
import Skills from '../components/sections/Skills';
import AboutMe from '../components/sections/AboutMe';
import Projects from '../components/sections/Projects';
import Bottom from '../components/sections/Bottom';

const HomePage = () => {
  return (
    <>
          <Introduction />
          <Skills />
          <AboutMe />
          <Projects />
          <Bottom />
    </>
  )
}

export default HomePage