import React from 'react'

export default function Statistics() {
  return (
    <section className='bg-[#1D2654] bg-right-bottom  bg-no-repeat bg-[url(/images/statistics-bg.png)] '>
        <div className='3xl:container mx-auto px-6 md:px-20 2xl:px-48'>
              <div className='flex flex-col lg:flex-row items-center'>
                  <div className='lg:w-72 flex-shrink-0 border-b lg:border-r border-[#353F97] pt-10 pb-5 lg:py-16 lg:pr-10'>
                      <p className='text-lg font-gilroy text-white font-extralight lg:font-black 2xl:pr-24 ' >We speak with  our powerfull statistics</p>
                  </div>
                  <div className='flex flex-col lg:flex-row justify-center lg:justify-between w-full gap-8 lg:gap-14 2xl:gap-24 items-center py-10 px-5 2xl:px-20'>
                      <div className=''>
                          <h2 className='text-center text-[30px] xl:text-[36px] font-gilroy text-white font-black pb-2 lg:pb-3'>384,000,000</h2>
                          <p className='text-[18px] xl:text-[20px] text-white font-gilroy font-black text-center'>Total $TRAC to Earn</p>
                      </div>
                      <div className=''>
                          <h2 className='text-center text-[30px] xl:text-[36px] font-gilroy text-white font-black pb-2 lg:pb-3'>8,600</h2>
                          <p className='text-[18px] xl:text-[20px] text-white font-gilroy font-black text-center'>Twitter Followers</p>
                      </div>
                      <div className=''>
                          <h2 className='text-center text-[30px] xl:text-[36px] font-gilroy text-white font-black pb-2 lg:pb-3'>1,600,000</h2>
                          <p className='text-[18px] xl:text-[20px] text-white font-gilroy font-black text-center'>Daily Calories Burned</p>
                      </div>
                  </div>
              </div> 
        </div>
    </section>
  )
}
