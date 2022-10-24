import React from 'react'
import {airbnb,binance,coinbase,dropbox} from '../assets'
import {clients} from '../constants'
import styles from '../style'
const Company = ({logo}) => (
     <div className={`${styles.flexCenter } flex-wrap w-full min-w-[120px] sm:min-w-[192px] `}>
      <img  src={logo} alt="logo" className=' hover:grayscale grayscale-0 sm:w-[192px] w-[100px] object-contain '/>
     </div>
)

function Clients() {
  return (
    <section className={`flex  items-center my-10  sm:flex-row ${styles.flexCenter }`}>
     {
        clients.map((client,index) => (
          <Company key={client.id} {...client}/>
        ))
      }

    </section>
  )
}

export default Clients