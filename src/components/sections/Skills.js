import React from 'react'
import SectionHeader from './SectionHeader'

const Skills = () => {
  return (
    <section className=" mb-5">
    <div className="container">
        <SectionHeader title={'Top Skills'} />

        <div className="row align-items-center text-dark bg-light-primary " style={{borderRadius: 30 + 'px'}}>

            <div className="col-lg-6 col-12 p-3 text-center  rounded">
                <div>
                    <h6 className="text-center">FRONTEND_</h6>
                    <p>
                        As a full-stack web developer, I am proficient in front-end technologies such as HTML,
                        CSS, and JavaScript. I create user interfaces, design layouts, and implement interactive
                        features that enhance the user experience. I also work with frameworks
                        and libraries like React to build dynamic and responsive web pages.
                    </p>
                </div>
                <div>
                    <h6 className="text-center">BACKEND_</h6>
                    <p>
                        I have knowledge on server-side programming using the Python-Django Framework and
                        Node.js. I can handle server-side logic, manage databases, and develop APIs to connect
                        the front-end and back-end components of web applications.
                    </p>
                </div>
                <div className="py-3">
                    <a href="works.html" className="btn custom-btn"> <i className="bi bi-stack"></i>
                        See my Works</a>
                </div>
            </div>
            <div className=" d-none d-md-block col-lg-6 col-12 justify-content-center text-center">
                <img src="images/vector-removebg-preview.png" alt="" className="w-50"></img>
            </div>

        </div>
    </div>


</section>

  )
}

export default Skills