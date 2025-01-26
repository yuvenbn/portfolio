import React from 'react'
import SectionHeader from './SectionHeader'

const Stack = () => {
    return (
        <section className="my-works section-padding">
            <div className="container">
                <SectionHeader title={'My Stack'} />

                <div className="row">
                    <div className="col-md-12  mb-4  rounded ">
                        <div className="card bg-light-primary display-5 text-center border-none" >
                            <p className="font-weight-bold m-3">Frontend | Client Side</p>
                            <div>

                                <i className="mx-2 devicon-html5-plain colored" data-bs-toggle="tooltip" title="HTML5"></i>
                                <i className="mx-2 devicon-css3-plain colored" data-bs-toggle="tooltip" title="CSS3"></i>
                                <i className="mx-2 devicon-javascript-plain colored" data-bs-toggle="tooltip" title="JavaScript"></i>
                                <i className="mx-2 devicon-jquery-plain colored" data-bs-toggle="tooltip" title="JQuery"></i>
                                <i className="mx-2 devicon-sass-plain colored" data-bs-toggle="tooltip" title="SASS"></i>
                                <i className="mx-2 devicon-tailwindcss-plain colored" data-bs-toggle="tooltip" title="Tailwind CSS"></i>
                                <i className="mx-2 devicon-bootstrap-plain colored" data-bs-toggle="tooltip" title="Bootstrap"></i>
                                <i className="mx-2 devicon-react-plain colored" data-bs-toggle="tooltip" title="React"></i>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-12  mb-4  rounded ">
                        <div className="card bg-light-primary display-5 border-none text-center ">
                            <p className="font-weight-bold m-3">Backend | Server Side</p>
                            <div>

                                <i className="mx-2 devicon-python-plain colored" data-bs-toggle="tooltip" title="Python"></i>
                                <i className="mx-2 devicon-django-plain text-secondary" data-bs-toggle="tooltip" title="Django"></i>
                                <i className="mx-2 devicon-mysql-plain colored" data-bs-toggle="tooltip" title="MySQL"></i>
                                <i className="mx-2 devicon-postgresql-plain colored" data-bs-toggle="tooltip" title="PostgreSQL"></i>
                                <i className="mx-2 devicon-nodejs-plain colored" data-bs-toggle="tooltip" title="NodeJS"></i>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-12  mb-4  rounded ">
                        <div className="card bg-light-primary display-5  border-none text-center ">
                            <p className="font-weight-bold m-3">Other</p>
                            <div>
                                <i className="mx-2 devicon-git-plain colored" data-bs-toggle="tooltip" title="Git"></i>
                                <i className="mx-2 devicon-github-plain colored" data-bs-toggle="tooltip" title="Github"></i>
                                <i className="mx-2 devicon-vscode-plain colored" data-bs-toggle="tooltip" title="VScode"></i>
                                <i className="mx-2 devicon-figma-plain colored" data-bs-toggle="tooltip" title="Figma"></i>
                                <i className="mx-2 devicon-npm-original-wordmark colored" data-bs-toggle="tooltip" title="Node Package Module"></i>
                                <i className="mx-2 devicon-heroku-plain colored" data-bs-toggle="tooltip" title="Heroku"></i>
                                <i className="mx-2 devicon-wordpress-plain colored" data-bs-toggle="tooltip" title="Wordpress"></i>
                                <i className="mx-2 devicon-gimp-plain colored" data-bs-toggle="tooltip" title="Gimp Editor"></i>
                                <i className="mx-2 devicon-illustrator-plain colored" data-bs-toggle="tooltip" title="Adobe Illustrator"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Stack