import React, { useState } from 'react'
import Head from 'next/head' 
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
    <Head>
    <meta name="google-site-verification" content="5V9jYxQGjfDNKWu0gsZP7qOKSumh5mFAuVv8JRl8BOU" />
        <title>TRAC | MoveToEarn Health and Fitness App</title>
<meta name="description" content="TRAC is a #MoveToEarn health and fitness App with #NFTSneakers that encourages users to move outdoors to earn tokens and NFT rewards."/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<link rel="canonical" href="https://trac.run/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="TRAC | MoveToEarn health and fitness App" />
<meta property="og:description" content="TRAC is a #MoveToEarn health and fitness App with #NFTSneakers that encourages users to move outdoors to earn tokens and NFT rewards.and Support." />
<meta property="og:url" content="https://trac.run/" />
<meta property="og:site_name" content="TRAC" />
<meta property="og:updated_time" content="2022-05-04T13:15:02+08:00" />
<meta property="og:image" content="https://trac.run/public/images/trac-move-to-earn.png" />
<meta property="og:image:secure_url" content="https://trac.run/public/images/trac-move-to-earn.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="TRAC" />
<meta property="og:image:type" content="image/png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="TRAC | MoveToEarn Health and Fitness App" />
<meta name="twitter:description" content="TRAC is a MoveToEarn health and fitness App with NFTSneakers that encourages users to move outdoors to earn tokens and NFT rewards" />
<meta name="twitter:image" content="https://trac.run/public/images/trac-move-to-earn.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="TRAC" />
<meta name="twitter:label2" content="Time to read" />
<meta name="twitter:data2" content="1 minute" />
<script type="application/ld+json" class="rank-math-schema">{"@context":"https://schema.org","@graph":[{"@type":["Person","Organization"],"@id":"https://trac.run/#person","name":"TRAC","logo":{"@type":"ImageObject","@id":"https://trac.run/#logo","url":"https://trac.run/public/images/trac-move-to-earn.png","caption":"TRAC","inLanguage":"en-US","width":"1920","height":"1080"},"image":{"@type":"ImageObject","@id":"https://trac.run/#logo","url":"https://trac.run/public/images/trac-move-to-earn.png","caption":"TRAC","inLanguage":"en-US","width":"1920","height":"1080"}},{"@type":"WebSite","@id":"https://trac.run/#website","url":"https://trac.run","name":"TRAC","publisher":{"@id":"https://trac.run/#person"},"inLanguage":"en-US","potentialAction":{"@type":"SearchAction","target":"https://trac.run/?s={search_term_string}","query-input":"required name=search_term_string"}},{"@type":"ImageObject","@id":"https://trac.run/public/images/trac-move-to-earn.png","url":"https://trac.run/public/images/trac-move-to-earn.png","width":"200","height":"200","inLanguage":"en-US"},{"@type":"Person","@id":"https://trac.run/dev-trac-run/","name":"TRAC","url":"https://trac.run/author/info-couponreegmail-com/","image":{"@type":"ImageObject","@id":"https://secure.gravatar.com/avatar/566ed0daea59fdfb8b2e9935ff282a59?s=96&amp;d=mm&amp;r=g","url":"https://secure.gravatar.com/avatar/566ed0daea59fdfb8b2e9935ff282a59?s=96&amp;d=mm&amp;r=g","caption":"TRAC","inLanguage":"en-US"},"sameAs":["https://trac.run"]},{"@type":"WebPage","@id":"https://trac.run/#webpage","url":"https://trac.run/","name":"TRAC | Move MoveToEarn| TRAC","datePublished":"2020-09-14T19:40:29+08:00","dateModified":"2022-05-04T13:15:02+08:00","author":{"@id":"https://trac.run/author/dev-trac-run/"},"isPartOf":{"@id":"https://trac.run/#website"},"primaryImageOfPage":{"@id":"https://trac.run/public/images/trac-move-to-earn.png"},"inLanguage":"en-US"}]}</script>
      </Head>
        <div className='px-6 md:px-20 flex  justify-between items-center 3xl:container mx-auto'>
            <figure>
                <img className='h-8 md:h-10' src="/images/logos/logo.svg" />
            </figure>   
            <div>
                <nav  className={`fixed z-30 transition-all duration-300 top-0 bottom-0 bg-white w-72 h-full px-10 pt-20 lg:w-auto lg:px-0 lg:pt-0 lg:static   ${open ? 'right-0' : ' right-[-999px]'}`}>
                  <ul className='flex flex-col lg:flex-row  lg:items-center gap-3 xl:gap-5 2xl:gap-10'>
                   <li>
                      <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[20px] font-black italic text-white menu-shadow' to="tracToEarn" spy={true} smooth={true} duration={500} >TRAC-TO-EARN</Link>
                      </li>
                      <li> 
                        <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[20px] font-black italic text-white menu-shadow' to="GamePlay" spy={true} smooth={true} duration={500} >GAMEPLAY</Link>
                      </li>
                      <li> 
                          <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[20px] font-black italic text-white menu-shadow' to="GameToken" spy={true} smooth={true} duration={500} >TOKENS</Link>
                      </li>
                      <li> 
                          <Link activeClass="!text-brand-red"  className='cursor-pointer text-xl xl:text-[20px] font-black italic text-white menu-shadow' to="GameFeatures" spy={true} smooth={true} duration={500} >GAME FEATURES</Link>
                      </li>
                      <li>
                        <a href="https://docs.trac.run/" target='_blank' rel="noopener noreferrer" className='text-xl xl:text-[20px] font-black italic text-white menu-shadow'>WHITEPAPER</a>
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
