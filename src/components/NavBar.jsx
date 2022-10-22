import {useState} from 'react'
import {close,logo,menu} from '../assets'
import {navLinks} from '../constants'

function NavBar() {
  const [toggle,setToggle]  = useState(false);
  return (
    
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hooBank" className='w-[124px] h-[32px]' />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {
            navLinks.map((navLink,index) => (
              <li key={navLink.id} 
              className={`font-poppins font-normal 
                          cursor-pointer text-[16px] 
                          ${index === navLink.length-1?'mr-0':'mr-10'}
                         text-white`}>
                <a href={`#${navLink.id}`}>
                        {navLink.title}
                      </a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
             src={!toggle ? menu : close} 
             alt="openCloseMenu"
             className='cursor-pointer h-[28px] w-[28px] object-contain'
             onClick={()=> setToggle((prev) => (
              !prev)) 
             } />
           <div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                {
                  navLinks.map((navLink,index) => (
                    <li key={navLink.id} 
                    className={`font-poppins font-normal 
                                cursor-pointer text-[16px] 
                                ${index === navLink.length-1?'mb-0':'mb-4'}
                              text-white`}>
                      <a href={`#${navLink.id}`}>
                        {navLink.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
           </div>

        </div>
      </nav>
   
  )
}

export default NavBar