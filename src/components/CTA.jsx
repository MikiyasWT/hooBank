import React from 'react'
import styles from '../style'
import {Button} from '../components'
//call to action


function CTA() {
  return (
   <section className='my-10'>
    <div className='left-12 right-12 py-0 px-10 h-[350px] sm:h-[250px] md:h-[200px] bg-black-gradient flex flex-col  justify-evenly rounded-[16px] my-0 sm:flex-row '>
        <div className='flex flex-col mx-0 my-0'>
        <h1 className={`${styles.heading2} sm:block `}>
          Let's try our Service now
        </h1>
        <p className={`${styles.paragraph} mx-0 sm:block `}>
        Everything you need to accept card payments <br className='sm:block hidden'/>and grow your business anywhere on the planet.
        </p>
        </div>

        <div className='flex justify-start sm:items-start px-2 py-5 sm:py-20'>
          <Button styles="mt-0 p-1 rounded-[10px] "/>
        </div>
    </div>
   </section>

  )
}

export default CTA