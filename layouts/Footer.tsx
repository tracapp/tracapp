import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='flex justify-center lg:pb-10 pt-12'>
        <div className='pb-6 sm:pb-16 px-6 md:px-0'>
          <h2 className='font-black italic text-[26px] lg:text-[40px]  xl:text-[60px] 2xl:text-[100px] leading-[1] xl:leading-[1.7] text-black relative z-20 uppercase   text-center' > TRAC. <span className='text-brand-red'> EARN.</span>   REPEAT. </h2>
          <h1 className='moonhouse-stroke font-moonhouse text-[50px] xl:text-[120px] 2xl:text-[260px] lg:-ml-20 italic font-normal leading-4 uppercase'>TRAC.RUN</h1>
        </div>
      </div> 
      <div className='bg-left-bottom bg-cover  bg-no-repeat bg-[url(/images/footer-bg-mobile.png)] sm:bg-[url(/images/footer-bg.png)] pt-8'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-[#C5C5C5] text-[12px]  sm:text-[22px] font-bold italic pb-3'>JOIN OUR COMMUNITY</h2>
          <ul className='pb-16 md:pb-20 flex gap-4 sm:gap-8 items-center px-16 sm:px-0'>
            <li><a href="https://medium.com/@tracdotrun" target='_blank' rel="noopener noreferrer"><img src="/images/medium.svg" alt="medium.svg" /></a></li>
            <li><a href="https://twitter.com/tracdotrun" target='_blank' rel="noopener noreferrer"><img src="/images/twitter.svg" alt="twitter.svg" /></a></li>
            <li><a href="https://t.me/tracdotrun" target='_blank' rel="noopener noreferrer"><img src="/images/telegram.svg" alt="telegram.svg" /></a></li>
            <li><a href="https://discord.com/invite/trac" target='_blank' rel="noopener noreferrer"><img src="/images/discord.svg" alt="discord.svg" /></a></li>
            <li><a href="https://instagram.com/tracdotrun/" target='_blank' rel="noopener noreferrer"><img src="/images/instagram.svg" alt="instagram.svg" /></a></li>  
          </ul>
          <p className='text-[12px] md:text-xl font-black italic text-[#C5C5C5] pb-5 sm:pb-8 text-center'>
            Copyright © 2022 TRACGIGA STUDIO LTD.
          </p>
        </div>
      </div>
    </footer>
  )
}
