import React from 'react'
import styles from './style'
import { Navbar,Billing,Business,Button,CarDeal,Clients,CTA,FeedbackCard,Footer,GetStarted,Hero,NavBar,Stats,Testimonials} from './components'


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
    <Footer/>
    </div>
   </div>

  </div>
  )
}

export default App