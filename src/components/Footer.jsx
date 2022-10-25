import React from 'react'
import styles from '../style'
import {logo} from '../assets'
import {footerLinks,socialMedia} from '../constants'


//<a href={media.link}><img key={media.id} className="cursor-pointer m-2 " src={media.icon} alt="media icon"/></a>


function Footer() {
  return (
    <section className={`flex flex-row justify-between w-full sm:items-center flex-wrap sm:mt-10 md:flex-row sm:row md:h-[208px] sm:h-[208px] `}>
      <div className='flex flex-row items-center justify-around mt-10 sm:flex-col sm:mt-30 sm:py-10 '>
         <img src={logo} alt="hooBank logo" className='h-[48px] sm:h-[72px] sm:w-[266px] '/>
         <p className={`${styles.paragraph} w-[270px] py-2 ml-5`}>
         A new way to make the payments easy,<br className='sm:block hidden'/> reliable and secure.
         </p>
      </div>

      
      {
         footerLinks.map((footerLink,index) => (
            <div className=' flex flex-col flex-start'>
            <h4 className={`font-poppins text-white text-[18px] w-[108px] h-[27px] font-normal my-5`}>{footerLink.title}</h4>
            
            {
               footerLink.links.map((link,index) => (
                  <ul>
                  <li key={index} className='cursor-pointer text-dimWhite py-1'><a href={link.link}>{link.name}</a></li>
                  
                  </ul>
               
               ))
            }
         </div>
         ))
      }

      
      <div className='w-full'>
      <hr className='mt-5 left-20 w-full bg-black-gradient'/>
      </div>
      
      <div className='w-full h-[100px] flex flex-col-reverse sm:justify-between sm:flex-row '>
         <div className='mx-10 sm:ml-5 justify-center'>
            <p className='pt-2 sm:pt-5 font-poppins text-[18px] text-dimWhite'>
                  Copyright @ 2022 HooBank All rights reserverd
            </p>
         </div> 
         <div className='flex flex-row items-center justify-center ml-15 mt-2 sm:my-0  float-right '>
           
         {
         socialMedia.map((media,index) => (
            <div className='flex flex-row float-right sm:mb-10'>
               <a href={media.link}><img key={media.id} className="cursor-pointer m-2 " src={media.icon} alt="media icon"/></a>
            </div>
            
         ))
         
      }
         </div> 
      </div>
      
      
      
      
       
    </section>
  )
}

export default Footer