import React from 'react'

const Introduction = () => {
    return (
        <section className="introduction  section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 text-secondary align-items-center left text-left">
                        <div>
                            <h4 className="text-secondary">I am,</h4>
                            <h1><span>Yuven</span> <span className="text-primary">Brian</span> </h1>
                            <h5 className="text-secondary text-capitalize"><span className="text-primary">Full Stack </span>Web
                                Developer</h5>
                            <div className=" mb-3 support-text ">
                                <p className="text-secondary small"> Software developer from Buea, Cameroon with solid
                                    experience in building solutions using cutting-edge technologies </p>
                            </div>
                            <div className="social-links-icons mb-3">
                                <a href="https://www.linkedin.com/in/yuven-brian"><i className="bi bi-linkedin text-primary"></i></a>
                                <a href="https://github.com/yuvenbn" className='mx-2'><i className="bi bi-github"></i></a>
                                <a href=""><i className="bi bi-twitter text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <div className="">
                            <img className="w-75 intro-image" src="images/me2.JPG" width="400" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction