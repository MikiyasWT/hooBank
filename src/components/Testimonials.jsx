import React from 'react'
import styles, {layout} from '../style'
import FeedbackCard from './FeedbackCard'
import {feedback} from '../constants'


function Testimonials() {
  return (
    <section>
      <div className={`${layout.sectionInfo} flex flex-col sm:flex-row sm:my-10 my-6 `}>
        <h1 className={`${styles.heading2} `}>What people are <br className='sm:block hidden'/> saying about us</h1>
        <p className={`${styles.paragraph} `}>
          Everything you need to accept card Payments and grow your business anywhere on the planet.
        </p>
      </div>
      
      <div className='absolute w-[50%] h-[60%] right-0 blue__gradient z-[0] rounded-full'/>

      <div className={`flex flex-col sm:flex-row  justify-between  sm:my-10 my-6  relative z-[1]`}>
        {
          feedback.map((feed,index) => (
            <FeedbackCard key={feed.id} {...feed} />
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials