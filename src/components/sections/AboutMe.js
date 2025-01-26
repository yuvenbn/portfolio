import React from 'react'

const AboutMe = () => {
  return (
    <section className="about-me section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-10 p-3  shadow-lg bg-light-primary"
                    style={{borderRadius : 30 + 'px'}}>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img src="images/me3.jpg" alt="" className="w-100" style={{borderRadius : 20 + 'px'}}></img>
                        </div>
                        <div className="col-md-6 col-12 d-flex align-items-center ">
                            <div className="pt-3">
                                <h6> <i className="bi bi-pen"></i> ABOUT ME_</h6>
                                <p className="">
                                    I am a self-motivated full-stack web developer with experience in the technology
                                    realm. I continuously strive to improve my skills and find innovative solutions
                                    for web applications. <br></br>
                                    Drawing is one of my creative outlets, fueling my
                                    sense of aesthetics in design. 
                                </p>
                          
                                <p>     
                                        I also enjoy an active lifestyle, with
                                        jogging and exercise contributing to my well-being. With over five years of
                                        experience, I have a deep understanding of web development principles and excel
                                        at problem-solving complex projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default AboutMe