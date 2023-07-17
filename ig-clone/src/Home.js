
import React from 'react'
import "./home.css"
// importing Navigation And Timeline components/page into home page
import Sidenavbar from './nav/Sidenavbar'
import Timeline from './timeline/Timeline'
function Home() {
  return (
    <div className='home'>
      <div className='home__nav'>
      <Sidenavbar />
      </div>
      <div className='home__timeline'>
        <Timeline />
      </div>  
      
    </div>
  );
}

export default Home
