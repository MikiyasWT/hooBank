import React from 'react'
import styles from '../style'
import {Button} from '../components'
//call to action


function CTA() {
  return (
   <section>
    <div className='left-12 right-12 py-10 px-10 bg-black-gradient flex flex-col justify-between rounded-[16px] sm:flex-row'>
        <div className='flex flex-col'>
        <h1 className={`${styles.heading2}`}>
          Let's try our Service now
        </h1>
        <p className={`${styles.paragraph}`}>
        Everything you need to accept card payments <br className='sm:block hidden'/>and grow your business anywhere on the planet.
        </p>
        </div>

        <div className='flex justify-start sm:items-center'>
          <Button styles="mt-2 p-2 rounded-[10px] "/>
        </div>
    </div>
   </section>

  )
}

export default CTA