import React from 'react'
import {quotes} from '../assets'
import styles from '../style'


function FeedbackCard({id,content,name,title,img}) {
  return (
    <section className={`flex flex-col  justify-center rounded-[20px] py-6 px-4 my-4 feature-card sm:ml-4`}>
      <img src={quotes} alt="quote" className='w-[32px] h-[32px] mb-6'/>
      <p className={`${styles.paragraph} mb-6`}>
       {content}
      </p>
      <div className='flex flex-row  my-5'>
        <img src={img} alt="image" className='w-[48px] h-[48px] rounded-full '/>
        <div className='flex flex-col ml-5'>
          <h1 className={`text-[18px] font-poppins font-semibold text-white`}>{name}</h1>
          <h4 className={`text-[16px] font-poppins font-nomral text-dimWhite`}>{title}</h4>
        </div>
      </div>
    </section>
  )
}

export default FeedbackCard