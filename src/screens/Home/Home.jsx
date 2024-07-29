// import React, { useEffect, useState } from 'react'
import './Home.css';
import Post from '../../components/Post/Post';
import UseFetch  from '../../components/Hooks/UseFetch';

function Home() {
  
  const {data : posts,error,isPending}= UseFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div className='container'>
            <div className="row">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        posts.length > 0 ? (
          // Display posts here (replace with your rendering logic)
          <ul>
            {posts.map((post) => (  
             <Post post={post} key={post.id}/>

            ))}
          </ul>
        ) : (
          isPending && <p>Loading posts...</p>
        )
      )}
      
      </div>
    </div>
  );
}

export default Home;