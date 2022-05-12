import React from 'react'

export default function FairLaunch() {
  return (
     <section className='px-6 md:px-20 2xl:px-48 py-20 md:py-40'>
        <div className='3xl:container mx-auto'>
            <div className='flex justify-center'>
                <div className='pb-8 sm:pb-16 px-6 md:px-0'>
                    <h2 className='font-black italic text-[28px] lg:text-[40px]  xl:text-[58px]  leading-[1.6] -mb-3 text-brand-dark-100  uppercase relative z-20  text-center' > <span className='text-brand-red'>fair </span>  launch </h2>
                      <h1 className='moonhouse-stroke font-moonhouse text-[42px] xl:text-[100px] italic font-normal leading-4 uppercase text-center pb-8 md:pb-14'>EXCLUSIVES</h1>
                      <h3 className='text-lg md:text-[26px] lg:text-[32px] font-bold italic text-brand-dark-100 text-center'>MAY 12-15, 2022 18:00 UTC</h3>
                </div>
              </div>  
              <div className='max-w-[1000px] mx-auto'>
                  <div className='w-full rounded-2xl overflow-hidden border border-black shadow-[0_8px_1px_0_#000] flex flex-col md:flex-row'>
                      <figure className='md:w-6/12 relative'>
                          <img className='w-full h-full xl:h-96' src="/images/violet-rays.gif" alt="violet-rays.gif" /> 
                          <img className='absolute left-[58%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-30' src="/images/10050.webp" alt="10050.webp" /> 
                      </figure>
                      <div className='px-4 lg:px-12 py-8 md:w-6/12 flex flex-col items-center md:block'>
                          <h2 className='font-black italic text-lg lg:text-2xl  text-[#1D2654] pb-5 text-center md:text-left uppercase '>Fair Launch Limited Edition</h2>
                          <p className='italic text-base lg:text-[22px] pb-14 text-center md:text-left' >Get <strong className='text-[#FCB300]'>1 of 50</strong> Limited Edition Legendary NFT Sneakers for the Top 50 early participants who join us on our Official Fair Launch on Pinksale.</p>
                           <a href="https://www.pinksale.finance/" rel="noopener noreferrer" target='_blank' className='md:w-full inline-block text-center rounded-lg px-5 py-5 bg-[#DF1B3F] text-white font-black text-xl lg:text-[26px] italic'>Join Fair Launch Now!</a>
                      </div>
                  </div>
              </div>
        </div>
    </section>
  )
}
