
import React from 'react'
import "./Sidenavbar.css"
// Importing icons from MUI
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
function Sidenavbar() {
  return (
    // container for the navbar
    <div className='sidenavbar'>
    {/* importing instagram logo */}
      <img
      className='sidenavbar_logo'
       src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="Mackey's Work Needs No Elaborate Presentation Or Distracting - Instagram Text Logo White@pngkey.com" 
/>  
{/* Creating Buttons with the MUI icons */}
    <div className='sidenavbar__buttons'>
      <button className='sidenavbar__button'>
          <HomeIcon/>
          <span>Home</span>
          
      </button>
      <button className='sidenavbar__button'>
          <SearchIcon/>
          <span>Search</span>
          
      </button>
      <button className='sidenavbar__button'>
          <ExploreIcon/>
          <span>Explore</span>
          
      </button>
      <button className='sidenavbar__button'>
          <SlideshowIcon/>
          <span>Reels</span>
          
      </button>
      <button className='sidenavbar__button'>
          <ChatIcon/>
          <span>Messages</span>
          
      </button>
      <button className='sidenavbar__button'>
          <FavoriteBorderIcon/>
          <span>Notifications</span>
          
      </button>
      <button className='sidenavbar__button'>
          <AddCircleOutlineIcon/>
          <span>Create</span>
          </button>

    </div>
    <div className='sidenavbar__more'>
      <button className='sidenavbar__button'>
        <MenuIcon/>
        <span>More</span>
      </button>
    </div> 
    </div>
  );
}

export default Sidenavbar
