import React from 'react'

export default function GamePlayMobile() {
  return (
       <section className='-mt-10 bg-contain bg-left-top relative z-20 bg-no-repeat bg-[url(/images/Union-mobile-top.svg)] pt-20'>
        <div className='px-6 md:px-20 '>
          <div className='3xl:container pb-20 mx-auto' > 
              <div className='flex justify-center'>
                <div className='pb-16 px-6 md:px-0'>
                  <h2 className='font-black italic text-[28px] lg:text-[40px] xl:text-[60px] 2xl:text-[58px] leading-[1.2] text-brand-dark-100 uppercase' ><span className='text-brand-red'>trac</span> gameplay </h2>
                  <h1 className='moonhouse-stroke font-moonhouse text-[100px] xl:text-[120px] 2xl:text-[180px] italic font-normal leading-4 '>PLAY</h1>
                </div>
                  </div> 
                  <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                          <figure className='-mt-40 -ml-5'>
                              <img src="/images/runline-mobile.png" alt="runline-mobile.png" />
                          </figure>
                      </div>
                      <div className='grid grid-cols-1 gap-10 -ml-6'>
                          <div className=''>
                              <figure className='w-full flex justify-center items-center'>
                                <img className='hover:scale-110 transition-all duration-300 pr-10 pl-5'  src="/images/register.png" alt="register.png" />
                              </figure>
                               <div className='relative'> 
                                    <h1 className='font-gilroy leading-[.8] text-[204px] font-black absolute text-brand-dark-100 opacity-5 right-0 -top-10 z-10'>1</h1>
                                    <div className='pt-5 relative z-20'>
                                    <h2 className='text-2xl font-black italic text-white shadow-mobile pb-2'>Register</h2>
                                    <p className='text-sm font-black italic leading-[24px] text-[#1D2654]'>Register with your preferred email and get the verification code.</p>
                                    </div>
                                </div>
                          </div>
                          <div className=''>
                              <figure className='w-full flex justify-center items-center'>
                                <img  className='hover:scale-110 transition-all duration-300  px-10' src="/images/marketplace.png" alt="marketplace.png" />
                              </figure>
                             <div className='relative '> 
                                <h1 className='font-gilroy leading-[.8] text-[204px] font-black absolute text-brand-dark-100 opacity-5 right-0 top-0 z-10'>2</h1>
                                <div className='pt-5 relative z-20'>
                                <h2 className='text-2xl font-black italic text-white shadow-mobile pb-2'>Marketplace</h2>
                                <p className='text-sm font-black italic leading-[24px] text-[#1D2654]'>Get your Sneakers to start earning tokens and NFT rewards. Sneakers can be levelled up, can add attributes points and Boosters in order to amplify its performance.</p>
                                </div>
                            </div>
                          </div>
                          <div className='-ml-10 pt-10'>
                              <figure className='w-full flex justify-center items-center'>
                               <img className='hover:scale-110 transition-all duration-300  px-5'  src="/images/trac-and-earn.png" alt="trac-and-earn.png" />
                              </figure>
                            <div className='relative'> 
                                <h1 className='font-gilroy leading-[.8] text-[204px] font-black absolute text-brand-dark-100 opacity-5 right-5 top-5 2xl:top-0 z-10'>3</h1>
                                <div className='pt-20  pl-5 2xl:pl-0 2xl:pt-5 relative z-20'>
                                <h2 className='text-2xl font-black italic text-white shadow-mobile pb-2'>TRAC and Earn</h2>
                                <p className='text-sm font-black italic leading-[24px] text-[#1D2654]'>Earn TRAC Tokens by walking, running and moving outdoors. TRAC builds a full ecosystem including in-app wallet, swap, and marketplace so that the app is intuitive to use.</p>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
           </div>
        </div>
      </section>
  )
}
