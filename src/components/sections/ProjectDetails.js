import React from 'react'
import projects  from '../../assets/projects'

const ProjectDetails = ({ slug }) => {
   console.log(slug);
   var project = projects.find(proj => proj.slug == 'yuvenbn');

    return (
        <section className="section-padding">
            <div className="container">
                <div className="text-center mt-4">
                    <h5>{project.title}</h5>
                </div>
                <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators my-4">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/veet-shot_lerl5h.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            {project.images.map((image, index) => {
                                 <div key={index} className="carousel-item">
                                     <img src="images/veet-shot_lerl5h.jpg" className="d-block w-100" alt="..."></img>
                                 </div>
                            })};
                            <div className="carousel-item">
                                <img src="images/veet-shot_lerl5h.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="images/veet-shot_lerl5h.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="images/veet-shot_lerl5h.jpg" className="d-block w-100" alt="..."></img>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon bg-dark rounded " aria-hidden="true"></span>
                            <span className="sr-only"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-3 justify-content-center">
                    <div className="col-md-10">
                        <p className="">
                            Solafide SmartPOS is a lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia adipisci corporis veniam ipsum tempora perspiciatis nisi magnam blanditiis quia quas autem, natus odit aliquid sunt aliquam magni facere sequi beatae recusandae asperiores. Exercitationem sit, incidunt sunt amet ullam dolorum rem est harum dolore voluptatem maxime optio porro deleniti mollitia repellendus molestias cum iste nobis at inventore perferendis aliquam sint atque! Molestiae recusandae ipsum alias ducimus? Debitis dignissimos velit harum quia. Hic, similique? Nobis quae illum nostrum sunt cumque quo esse quidem? Aut, temporibus eos quibusdam ratione aliquam alias perspiciatis omnis veritatis? Molestias officia facere itaque ut distinctio ex. Esse.
                        </p>
                        <p className="">
                            Solafide SmartPOS is a lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia adipisci corporis veniam ipsum tempora perspiciatis nisi magnam blanditiis quia quas autem, natus odit aliquid sunt aliquam magni facere sequi beatae recusandae asperiores. Exercitationem sit, incidunt sunt amet ullam dolorum rem est harum dolore voluptatem maxime optio porro deleniti mollitia repellendus molestias cum iste nobis at inventore perferendis aliquam sint atque! Molestiae recusandae ipsum alias ducimus? Debitis dignissimos velit harum quia. Hic, similique? Nobis quae illum nostrum sunt cumque quo esse quidem? Aut, temporibus eos quibusdam ratione aliquam alias perspiciatis omnis veritatis? Molestias officia facere itaque ut distinctio ex. Esse.
                        </p>
                        <p>lorem1000</p>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default ProjectDetails