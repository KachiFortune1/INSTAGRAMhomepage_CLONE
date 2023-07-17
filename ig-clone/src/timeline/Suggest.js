import React from 'react'
import "./Suggestfriends.css"
import { Avatar } from '@mui/material';
function Suggestfriends({username, relation}) {
  return (
    <div className='suggestions'>
    <div className='suggestions__title'>
      Suggested For You
    </div>
    <div className='suggestion__usernames'>

      <div className='suggestion__usern'>
        <div className='usern__left'>
        <span className='avatar'>
              <Avatar>
                {username.charAt(0).toUpperCase()}
              </Avatar>
        </span>
        <div className='usern_info'>
          <span className='username'>{username}</span>
          <span className='relation'>{relation}</span>
        </div>
    </div>
        <button className='follow__button'>Follow</button>
      </div>

      
    </div>
    </div>
  )
}

export default Suggestfriends
