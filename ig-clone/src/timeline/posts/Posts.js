/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Posts.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function Posts({user, postImage, likes, timestamp}) {
  return (
    <div className='post'>
      <div className='posts_top'>
        <div className='posts_topProfile'>
        <Avatar>
            {user.charAt(0).toUpperCase()}   
        </Avatar>
        {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='posts_image'>
        <img src={postImage}/>
      </div>
      <div className='post_bottom'>
        <div className='post_bottomIcons'>
            <div className='post_mainIcon'>
                <FavoriteBorderIcon className='postIcon'/>
                <ChatBubbleOutlineIcon className='postIcon'/>
                <TelegramIcon className='postIcon'/>
            </div>
            <div className='post_Saveicon'>
                <BookmarkBorderIcon className='postIcon'/>
            </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  )
}

export default Posts
