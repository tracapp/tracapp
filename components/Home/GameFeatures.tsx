import React from 'react'

export default function GameFeatures() {
  return (
     <section className='px-20 pb-14'>
       <div className='flex justify-center -mt-20 pt-36 bg-left-top bg-no-repeat lg:bg-[url(/images/gameplay.png)]'>
              <div className='pb-16 px-6 md:px-0'>
                <h2 className='font-black italic text-[28px] lg:text-[40px]  xl:text-[60px] 2xl:text-[58px] leading-[1.8] text-brand-dark-100 relative z-20 uppercase text-center' >  <span className='text-brand-red'>game </span>   features </h2>
                <h1 className='moonhouse-stroke font-moonhouse text-[50px] xl:text-[100px] 2xl:text-[180px] italic font-normal leading-4 uppercase'>FEATURES</h1>
              </div>
          </div> 
          <div className='px-20 pb-10 pt-20 flex justify-center items-center bg-left-bottom bg-no-repeat lg:bg-[url(/images/gameplay.png)]'>
              <figure>
                <img   src="/images/nft-sneakers.png " alt="nft-sneakers.png " />
              </figure>
          </div> 
    </section>
  )
}
