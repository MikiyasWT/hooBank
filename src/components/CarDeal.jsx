import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'


const CarDeal = () => {
  return (
    <section className='flex flex-col sm:flex-row sm:my-10 my-10'>
     <div className={`flex flex-col ${layout.sectionInfo}`}>
     layout.sectionInfo
      <h2 className={`${styles.heading2}`}>Find a better Card deal <br className='sm:block hidden'/> in few easy steps</h2>
      <p className={`${styles.paragraph} text-dimWhite`}>
      For a dealer to purchase from Coaster, it must have an account with Coaster and a
      Customer Number. The Customer Number must be associated.
      </p>
      <Button styles="mt-10" />
     </div>

     <div className={`flex flex-col ${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[472px] h-[280px]" />
     </div>
    </section>

  )
}

export default CarDeal