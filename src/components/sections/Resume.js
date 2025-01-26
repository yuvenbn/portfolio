import React from 'react'
import TimeLineBox from './bottom/TimeLineBox'
import SectionHeader from './SectionHeader'

import work_experiences from '../../assets/work_experiences'
import academic_experiences from '../../assets/academic_experiences'

const Resume = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <SectionHeader title={'My Resume'} />

                <div className="row justify-content-center">
                    <div className="col-md-4 col-12">
                        <h5 className="text-center mt-3">  Education</h5>
                        <div className="timeline">

                            {academic_experiences.map((academic_exp) => (
                                <TimeLineBox key={academic_exp.id}
                                    date_range={academic_exp.date_range}
                                    title={academic_exp.title}
                                    institution={academic_exp.institution}
                                    institution_link={academic_exp.institution_link}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="col-md-4 col-12 ">
                        <h5 className="text-center mt-3">Experience</h5>
                        <div className="timeline">

                            {work_experiences.map((work_exp) => (
                                <TimeLineBox key={work_exp.id}
                                    date_range={work_exp.date_range}
                                    title={work_exp.title}
                                    institution={work_exp.institution}
                                    institution_link={work_exp.institution_link}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume