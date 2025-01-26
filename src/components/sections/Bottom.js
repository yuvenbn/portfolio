import React from 'react'
import work_experiences from '../../assets/work_experiences'
import ViewStack from './bottom/ViewStack'
import TimeLineBox from './bottom/TimeLineBox'


const Bottom = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
         <div className='row'>
            <div className='col-md-8 col-12'>
                <hr></hr>
                <ViewStack />
            </div>
            <div className='col-md-4'>
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

export default Bottom