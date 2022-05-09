import React from 'react'

export default function GamePlay() {
  return (
    <section className=' bg-left-top bg-no-repeat lg:bg-[url(/images/gameplay.png)] pt-24'>
        <div className='px-6 md:px-20 bg-contain bg-left-bottom bg-no-repeat bg-[url(/images/Union.png)]'>
          <div className='3xl:container pb-20 mx-auto' > 
              <div className='flex justify-center'>
                <div className='pb-16 px-6 md:px-0'>
                  <h2 className='font-black italic text-[28px] lg:text-[40px] xl:text-[60px] 2xl:text-[58px] leading-[1.8] text-brand-dark-100 uppercase relative z-20' ><span className='text-brand-red'>trac</span> gameplay </h2>
                  <h1 className='moonhouse-stroke font-moonhouse text-[100px] xl:text-[120px] 2xl:text-[180px] italic font-normal leading-4 pl-5'>PLAY</h1>
                </div>
            </div>
            <div className='pb-32 max-w-[1720px] mx-auto xl:pt-20'>
              <div className='grid grid-cols-3 gap-20 2xl:gap-40 relative z-20'>
                <figure className='2xl:pl-20 pt-10'>
                  <img className='hover:scale-110 transition-all duration-300 w-64'  src="/images/register.png" alt="register.png" />
                </figure>
                <figure className='pl-16 2xl:pl-10 pt-20'>
                  <img  className='hover:scale-110 transition-all duration-300 w-56' src="/images/marketplace.png" alt="marketplace.png" />
                </figure>
                <figure className='2xl:pr-5  mt-32 2xl:-mt-5'>
                  <img className='hover:scale-110 transition-all duration-300 w-96 '  src="/images/trac-and-earn.png" alt="trac-and-earn.png" />
                </figure>
              </div>
              <div className='flex justify-center relative xl:-mt-20'>
                <figure className='pl-40 2xl:px-40'>
                    <img src="/images/runline.gif" alt="line.gif" />
                </figure> 
              </div>
              <div className='grid grid-cols-3 gap-10 xl:gap-40 xl:-mt-10 2xl:-mt-32'>
                  <div className='relative w-80 px-5 -mt-10 2xl:ml-36'> 
                    <h1 className='font-gilroy leading-[.5] text-[204px] font-black absolute text-brand-dark-100 opacity-5 right-12 top-0 z-10'>1</h1>
                    <div className='pt-5 relative z-20'>
                      <h2 className='text-[32px] font-black italic text-white shadow-desktop pb-2'>Register</h2>
                      <p className='text-base font-normal italic leading-[20px]  text-brand-dark-100'>Register with your preferred email and get the verification code.</p>
                    </div>
                  </div>
                  <div className='relative w-80 px-5 mt-10 2xl:mt-20 ml-0'> 
                    <h1 className='font-gilroy leading-[.5] text-[204px] font-black absolute text-brand-dark-100 opacity-5 right-5 top-0 z-10'>2</h1>
                    <div className='pt-5 relative z-20'>
                      <h2 className='text-[32px] font-black italic text-white shadow-desktop pb-2'>Marketplace</h2>
                      <p className='text-base font-normal italic leading-[20px]  text-brand-dark-100'>Get your Sneakers to start earning tokens and NFT rewards. Sneakers can be levelled up, can add attributes points and Boosters in order to amplify its performance.</p>
                    </div>
                  </div>
                  <div className='relative w-80 px-5 -mt-14'> 
                    <h1 className='font-gilroy leading-[.5] text-[204px] font-black absolute text-brand-dark-100 opacity-5 right-5 top-5 2xl:top-0 z-10'>3</h1>
                    <div className='pt-20  pl-5 2xl:pl-0 2xl:pt-5 relative z-20'>
                      <h2 className='text-[32px] font-black italic text-white shadow-desktop pb-2'>TRAC and Earn</h2>
                      <p className='text-base font-normal italic leading-[20px]  text-brand-dark-100'>Earn TRAC Tokens by walking, running and moving outdoors. TRAC builds a full ecosystem including in-app wallet, swap, and marketplace so that the app is intuitive to use.</p>
                    </div>
                  </div>
                </div>
            </div>
           </div>
        </div>
      </section>
  )
}
