import React from 'react'

export default function GameFeatureMobile() {
  return (
    <section className=''>
       <div className='flex justify-center'>
              <div className='pb-16 px-6 md:px-0'>
                <h2 className='font-black italic text-[28px] lg:text-[40px]  xl:text-[60px] 2xl:text-[58px] leading-[1.2] text-brand-dark-100  uppercase md:lowercase text-center' >  <span className='text-brand-red'>game </span>   features </h2>
                <h1 className='moonhouse-stroke font-moonhouse text-[50px] xl:text-[100px] 2xl:text-[180px] italic font-normal leading-4 uppercase'>FEATURES</h1>
              </div>
          </div> 
          <div className='px-10 flex justify-center items-center bg-right-top bg-no-repeat bg-[url(/images/features-bg-1.png)] '>
              <figure>
                <img   src="/images/features-main.png" alt="features-main.png" />
              </figure>
          </div> 
          <div className='px-6 md:px-20 lg:px-6 bg-right-bottom bg-no-repeat bg-[url(/images/features-bg-1.png)] pb-20'>
              <div className='flex gap-2 items-center'>
                  <div className='w-4/12 flex justify-start items-center'>
                      <figure>
                         <img  className='-ml-2' src="/images/customization.png" alt="customization.png" />
                        </figure>
                  </div>
                  <div className='w-6/12'> 
                    <h2 className='text-[#19204E] text-lg font-medium italic'>Customization</h2>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                    <div className='w-4/12 flex justify-start items-center'>
                        <figure>
                            <img   src="/images/rental-system.png" alt="rental-system.png" />
                        </figure>
                    </div>
                    <div className='w-6/12'> 
                        <h2 className='text-[#19204E] text-lg font-medium italic'>Rental System</h2>
                    </div> 
              </div>
              <div className='flex gap-2 items-center'>
                     <div className='w-4/12 flex justify-start items-center'>
                        <figure>
                            <img   src="/images/sneaker-minting.png" alt="sneaker-minting.png" />
                        </figure>
                    </div>
                    <div className='w-6/12'> 
                        <h2 className='text-[#19204E] text-lg font-medium italic'>Sneaker Minting</h2>
                    </div>   
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='w-4/12 flex justify-start items-center'>
                        <figure>
                        <img   src="/images/boosters.png" alt="boosters.png" />
                        </figure>
                    </div>
                    <div className='w-6/12'> 
                        <h2 className='text-[#19204E] text-lg font-medium italic'>Boosters</h2>
                    </div>  
              </div>
              <div className='flex gap-2 items-center'>
                   <div className='w-4/12 flex justify-start items-center'>
                        <figure>
                            <img   src="/images/in-app-trading.png" alt="in-app-trading.png" />
                        </figure>
                    </div>
                    <div className='w-6/12'> 
                        <h2 className='text-[#19204E] text-lg font-medium italic'>In-app Trading</h2>
                    </div>   
              </div>
              <div className='flex gap-2 items-center'>
                   <div className='w-4/12 flex justify-start items-center'>
                        <figure>
                           <img   src="/images/achievement.png" alt="achievement.png" />
                        </figure>
                    </div>
                    <div className='w-6/12'> 
                         <h2 className='text-[#19204E] text-lg font-medium italic'>Achievement Trophies</h2>
                    </div>    
              </div>
          </div>
    </section>
  )
}
