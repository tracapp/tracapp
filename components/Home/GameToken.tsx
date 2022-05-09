import React from 'react'

export default function GameToken() {
  return (
   <section className='pt-24 -mt-14 pb-20 bg-left-bottom bg-cover  bg-no-repeat bg-[url(/images/Union-mobile-bottom.svg)] lg:bg-none'>
        <div className='3xl:container   mx-auto ' > 
            <div className='flex justify-center'>
              <div className='pb-16 px-6 md:px-0'>
                <h2 className='font-black italic text-[28px] lg:text-[40px]  xl:text-[60px] 2xl:text-[58px] leading-[1.8] text-text-brand-dark-100 relative z-20 uppercase  text-center' > game <span className='text-brand-red'>tokens</span>   </h2>
                <h1 className='moonhouse-stroke font-moonhouse text-[75px] xl:text-[120px] 2xl:text-[180px] italic font-normal leading-4 uppercase'>token</h1>
              </div>
          </div>  
          <div className='bg-left-top lg:bg-right-top pt-20 -mt-20 bg-no-repeat bg-[url(/images/game-token-bg-mobile.png)] lg:bg-[url(/images/game-token-bg.png)] '>
              <div className='2xl:w-9/12 mx-auto lg:pt-28 px-6 md:px-20'>
                <div className='flex flex-col-reverse lg:flex-row gap-12 xl:gap-20'>
                  <div className='w-full lg:w-6/12 px-5 md:px-10 lg:px-0'>
                    <p className='italic text-[14px]  md:text-[24px] leading-[1.2] xl:text-[32px] '>TRAC app is governed by two Tokens. <span className='text-[#FFC000]'>TRAC Tokens</span>   and    <span className='text-[#0570F0]'>GRID Tokens</span> . As you burn those calories by walking and running outdoors you earn GRID Tokens, an in-game tokens. GRID tokens are then Swap to TRAC Tokens. GRID tokens are used in minting and upgrading your sneakers, buying Boosters like Energy drinks and sports jacket that enhances your TRAC Token earnings.</p>
                  </div>
                  <div className='w-full lg:w-6/12 flex justify-center items-center'>
                    <figure className='px-12 md:px-0'>
                      <img className='animate-updown'  src="/images/coin.png" alt="coin.png" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
  )
}
