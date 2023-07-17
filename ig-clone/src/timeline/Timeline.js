import React, { useState } from 'react'
import Suggestfriends from "./Suggest"
import "./Timeline.css"
import Posts from './posts/Posts';


function Timeline() {
  const[suggestfriends, setSuggest]= useState([
    {
    username:"Endurance",
    relation:"Follows Olatunde"
    },
    {
    username:"Tomisin",
    relation:"Follows Daniel"
    },
    {
    username:"Divine",
    relation:"New To Instagram"
    },
    {
    username:"Olatunde",
    relation:"Follows Endurance"
    },
    {
    username:"Gideon",
    relation:"Follows Jason"
    },
    {
    username:"Daniel",
    relation:"Follows Tomisin"
    },
    {
    username:"Jason",
    relation:"Follows Gideon"
    },
    {
    username:"Blessing",
    relation:"New to Instagram"
    },
])

  const [posts, setPosts]= useState([
    {
        user: "Fortune",
        postImage:"https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&w=1600",
        likes:10000,
        timestamp:"2d",

  },
  {
        user: "Ola",
        postImage:"https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&w=1600",
        likes:1000,
        timestamp:"4d",

  },
  {
        user: "James",
        postImage:"https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&w=1600",
        likes:100,
        timestamp:"6d",

  },
  {
        user: "Micheal",
        postImage:"https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&w=1600",
        likes:10,
        timestamp:"7d",

  },

]);
  return (
    <div className='timeline'>
      <div className='timeline__left'>
      <div className='timeline__posts'>
        {/* Using Map function to make components */}
      {posts.map((post) => (
      <Posts 
          user={post.user} 
          postImage={post.postImage}
          likes={post.likes} 
          timestamp={post.timestamp}

      />
      )
      )}
      </div>
      
      </div>
      <div className='timeline__right'>
      {suggestfriends.map((suggest) => (
          <Suggestfriends 
            username={suggest.username}
            relation={suggest.relation}
          />
      ))}
      
      </div>
    </div>
  );
}

export default Timeline
