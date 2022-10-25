import React from 'react'
import styles from './style'
import { Navbar,Billing,Business,Button,CarDeal,Clients,CTA,FeedbackCard,Footer,GetStarted,Hero,NavBar,Stats,Testimonials} from './components'
//className={`flex flex-col justify-between w-full items-center flex-wrap mt-10 md:flex-row  `}

function App() {
  return (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={` ${styles.paddingX} ${styles.flexCenter} `}>
      <div className={` ${styles.boxWidth} `}>
         <Navbar/>
         
      </div>
    </div>
   
   <div className={` bg-primary ${styles.flexStart}`}>
     <div className={` ${styles.boxWidth}`}>
       <Hero/>
     </div> 
   </div>

   <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
    <div className={` ${styles.boxWidth}`}>
    
    <Stats/>
    <Business/>
    <Billing/>
    <CarDeal/>
    <Testimonials/>
    <Clients/>
    <CTA/>
    </div>
   </div>

  

   <div className={`bg-lightDark h-[500px] md:flex-row sm:row md:h-[418px] sm:h-[300px] ${styles.flexStart} ${styles.paddingX}`}>
    <div className={` ${styles.boxWidth}`}>
      <Footer />
    </div>
  </div>

  </div>
  )
}

export default App