import React from 'react'

export default function TracToEarn() {
  return (
   <section className='md:px-20 lg:pl-14 lg:pr-20 pt-14 md:pt-40'>
        <div className='flex flex-col-reverse items-center lg:flex-row gap-5 2xl:gap-14 3xl:container mx-auto'>
          <div className='w-full lg:w-7/12 '>
            <figure className='2xl:pr-20'>
              <img className='w-full hidden sm:block' src="/images/track-to-earn.png" alt="track-to-earn.png" />
              <img className='w-full sm:hidden' src="/images/track-to-earn-mobile.png" alt="track-to-earn.png" />
            </figure>
            <div className='pb-20 pt-5 -mt-5 bg-no-repeat bg-[url(/images/gameplay-mobile.png)] lg:hidden '>
              <p className='pt-5 text-sm px-8 sm:text-xl 2xl:text-[32px] leading-snug  2xl:pr-36 italic text-brand-dark-100'>TRAC offers diverse in-app gamification features such as sneaker levelling, shoe-minting, and sneaker Boosters. Get your NFT sneakers on the marketplace and start your fitness routine and earn TRAC tokens just by walking, jogging, or running outdoors. </p>
            </div>
          </div>
          <div className='w-full lg:w-5/12'>
            <div className='pb-8 md:pb-16 px-6 md:px-0'>
              <h2 className='font-black italic text-[28px]  lg:text-[40px]  xl:text-[60px] 2xl:text-[58px] leading-[1.6] text-brand-dark-100 uppercase' ><span className='text-brand-red'>trac</span>-to-earn </h2>
              <h1 className='moonhouse-stroke font-moonhouse text-[96px] xl:text-[120px] 2xl:text-[180px] italic font-normal leading-4 lg:pl-5'>EARN</h1>
            </div>
            <p className='hidden lg:block text-xl 2xl:text-[32px] leading-snug  2xl:pr-36 italic text-brand-dark-100'>TRAC offers diverse in-app gamification features such as sneaker levelling, shoe-minting, and sneaker Boosters. Get your NFT sneakers on the marketplace and start your fitness routine and earn TRAC tokens just by walking, jogging, or running outdoors. </p>
          </div>
        </div>
      </section>
  )
}
