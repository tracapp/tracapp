import React from 'react'

export default function Fitness() {
  return (
  <section className='lg:pl-20 bg-cover bg-left-top bg-[url(/images/banner-bg.png)]'>
        <div className='flex flex-col-reverse lg:flex-row gap-8 3xl:container mx-auto'>
          <div className='w-full lg:w-5/12 px-6 md:px-20 lg:px-0'>
            <h1 className='moonhouse-stroke font-moonhouse text-[120px] xl:text-[220px] 2xl:text-[300px] italic font-normal leading-[1]'>trac</h1>
            <h2 className='font-black italic text-[30px] xl:text-[42px]  2xl:text-[58px] leading-[1.2] text-brand-dark-100 -mt-24 pl-6 md:pl-0 pb-10 md:pb-0 md:-mt-12 xl:-mt-20 2xl:-mt-28 uppercase 2xl:pl-8' ><span className='text-brand-red'>Trac</span> Your Fitness  </h2>
            <h3 className='font-medium italic text-xl xl:text-2xl 2xl:text-[32px] !leading-[1.2] py-5 text-brand-dark lowercase 2xl:pl-8  2xl:pr-28'>TRAC is your Move-To-Earn fitness app companion to a healthier lifestyle with built-in GameFi for Web3 activities</h3>
            <p className='text-sm leading-3 md:leading-normal xl:text-xl 2xl:text-2xl font-extralight italic text-brand-dark-100 2xl:pl-8 2xl:pr-28 pb-6 md:pb-12'>The apex of a physical fitness within the metaverse, using NFTs and geolocation technologies.</p>
            <div className='flex gap-3 md:flex-col'>
              <div className='pb-5 2xl:pl-8'>
                <h5 className='text-[8px] sm:text-lg italic font-medium md:pb-2 text-brand-dark-100'>CONTRACT AUDITED BY</h5>
                <div className='flex items-center gap-2 sm:gap-5'>
                  <a  href="https://github.com/ContractWolf/smart-contract-audits/" target='_blank' rel="noopener noreferrer"> <img src="/images/logos/contractwolf.svg" alt="coinsult.svg" /></a>
                                    
                </div>
              </div>
              <div className='pb-2 2xl:pl-8'>
                <h5 className='text-[8px] sm:text-lg italic font-medium md:pb-2 text-brand-dark-100'>API AND SDK POWERED BY</h5>
                <div className='flex items-end gap-2 sm:gap-5'>
                  <a href="https://developer.garmin.com/" target='_blank' rel="noopener noreferrer"><img src="/images/logos/garmin.svg" alt="garmin.svg" /></a>
                  <a href="https://developers.strava.com/" target='_blank' rel="noopener noreferrer">   <img src="/images/logos/strava.svg" alt="strava.svg" /></a>
                  <a  href="https://dev.fitbit.com/build/reference/web-api/" target='_blank' rel="noopener noreferrer">  <img src="/images/logos/fitbit.svg" alt="fitbit.svg" /></a> 
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-7/12'>
            <figure>
              <img className='w-full' src="/images/banner.png" alt="banner" />
            </figure>
          </div>
        </div>
      </section>
  )
}
