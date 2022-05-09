import React, { useState } from 'react' 
import { Link } from 'react-scroll'
export default function Header() {
    let [open, isOpen] = useState(false);

    const MenuOpen = () => {
        isOpen(true);
    } 
    const CloseMenu = () => {
        isOpen(false);
    } 
  return (
    <header className='bg-white py-4 shadow-lg sticky top-0 z-50'>
        <div className='px-6 md:px-20 flex  justify-between items-center 3xl:container mx-auto'>
            <figure>
                <img className='h-8 md:h-auto' src="/images/logos/logo.svg" />
            </figure>   
            <div>
                <nav  className={`fixed z-30 transition-all duration-300 top-0 bottom-0 bg-white w-72 h-full px-10 pt-20 lg:w-auto lg:px-0 lg:pt-0 lg:static   ${open ? 'right-0' : ' right-[-999px]'}`}>
                  <ul className='flex flex-col lg:flex-row  lg:items-center gap-3 xl:gap-5 2xl:gap-10'>
                   <li>
                      <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[26px] font-black italic text-white menu-shadow' to="tracToEarn" spy={true} smooth={true} duration={500} >TRAC-TO-EARN</Link>
                      </li>
                      <li> 
                        <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[26px] font-black italic text-white menu-shadow' to="GamePlay" spy={true} smooth={true} duration={500} >GAMEPLAY</Link>
                      </li>
                      <li> 
                          <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[26px] font-black italic text-white menu-shadow' to="GameToken" spy={true} smooth={true} duration={500} >TOKENS</Link>
                      </li>
                      <li> 
                          <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[26px] font-black italic text-white menu-shadow' to="GameFeatures" spy={true} smooth={true} duration={500} >GAME FEATURES</Link>
                      </li>
                      <li>
                        <a href="https://docs.trac.run/" target='_blank' rel="noopener noreferrer" className='text-xl xl:text-[26px] font-black italic text-white menu-shadow'>WHITEPAPER</a>
                      </li>
                </ul>
                  </nav>  
                  <button className='focus:outline-none lg:hidden' type='button' onClick={MenuOpen}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.6875 8C19.6875 7.48223 19.2678 7.0625 18.75 7.0625H1.25C0.732232 7.0625 0.3125 7.48223 0.3125 8C0.3125 8.51777 0.732232 8.9375 1.25 8.9375H18.75C19.2678 8.9375 19.6875 8.51777 19.6875 8Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.6875 1.75C19.6875 1.23223 19.2678 0.8125 18.75 0.8125H1.25C0.732232 0.8125 0.3125 1.23223 0.3125 1.75C0.3125 2.26777 0.732232 2.6875 1.25 2.6875H18.75C19.2678 2.6875 19.6875 2.26777 19.6875 1.75Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.6875 14.25C19.6875 13.7322 19.2678 13.3125 18.75 13.3125H1.25C0.732232 13.3125 0.3125 13.7322 0.3125 14.25C0.3125 14.7678 0.732232 15.1875 1.25 15.1875H18.75C19.2678 15.1875 19.6875 14.7678 19.6875 14.25Z" fill="black"/>
                    </svg>
                  </button>
            </div>
          </div>
          <div onClick={CloseMenu} className={`fixed lg:hidden left-0 top-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-30 z-20 transition-all duration-300 ${open ? 'opacity-100 visible': 'opacity-0 invisible'}`}></div>
    </header>
  )
}
