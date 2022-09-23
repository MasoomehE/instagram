import React from 'react'
import Post from './Post';

const posts = [
  {
    id : "123",
    username : "blue__site",
    userImg : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg" ,
    img : "/a.png" ,
    caption : "this is my caption"

  },
  {
    id : "124",
    username : "pyprogrammer",
    userImg : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg" ,
    img : "/s.jpg" ,
    caption : "this is an article for you."

  },
  {
    id : "125",
    username : "masoomeh.e18",
    userImg : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/499.jpg" ,
    img : "/d.png" ,
    caption : "me is masoomeh ebrahimzadeh"

  }
];

function Posts() {
  return (
    <div>
      {
        posts.map((post)  => (

        <Post 
        key={post.id} 
        id={post.id} 
        username={post.username}  
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />

        ))
      }
    </div>
  )
}

export default Posts
