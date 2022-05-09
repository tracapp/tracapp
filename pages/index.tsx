import type { NextPage } from 'next' 
import React from 'react';
import FairLaunch from '../components/Home/FairLaunch'
import Fitness from '../components/Home/Fitness'
import GameFeatureMobile from '../components/Home/GameFeatureMobile'
import GameFeatures from '../components/Home/GameFeatures'
import GamePlay from '../components/Home/GamePlay'
import GamePlayMobile from '../components/Home/GamePlayMobile'
import GameToken from '../components/Home/GameToken'
import Statistics from '../components/Home/Statistics'
import TracToEarn from '../components/Home/TracToEarn'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class Home extends React.Component { 
 
  componentDidMount() { 
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    }); 
    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    }); 
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => { 
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <> 
      <Fitness />
      <Element name="tracToEarn" className="-mt-40 pt-40" >
        <TracToEarn />
        </Element>
        <Element name="GamePlay" className="mb-20">
          <div className='hidden lg:block'>
            <GamePlay  />
          </div>
          <div className='lg:hidden'>
            <GamePlayMobile />
          </div>
      </Element>
       <Element name="GameToken" className="-mt-20 mb-20" >
        <GameToken />
        </Element>
      
      <Element name="GameFeatures" className="-mt-20" >
         <div className='hidden lg:block'>
            <GameFeatures  />
          </div>
          <div className='lg:hidden'>
            <GameFeatureMobile />
          </div>
        </Element>
     
      <Statistics />
      <FairLaunch/>
    </>  
    );
  }
};

 

export default Home
