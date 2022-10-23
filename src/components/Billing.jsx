import React from 'react'
import {apple,bill, google} from '../assets'
import styles, { layout } from '../style'


function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

     <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      For a dealer to purchase from Coaster, it must have an account with Coaster and a
      Customer Number. The Customer Number must be associated.
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
      <img src={apple} alt="apple_store" className='w-[124px] h-[64px] cursor-pointer object-contain mr-5'/>
      <img src={google} alt="apple_store" className='w-[124px] h-[64px] cursor-pointer object-contain'/>
      </div>
     </div> 
    </section>
  )
}

export default Billing 