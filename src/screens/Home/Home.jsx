import React, { useEffect, useState } from 'react'
import './Home.css';

export default function Home() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const fetchPosts = async()=>{
            const response =await fetch('https://jsonplaceholder.typicode.com/posts')

            const jsonResponse =response.json() // last commit
        }
    },[])
  return (
    <div className='container'>
      <p>this is home</p>
    </div>
  )
}
