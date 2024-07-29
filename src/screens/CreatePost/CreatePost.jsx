// import React from 'react';
import './CreatePost.css'

export default function CreatePost() {
  return (
    <div className='form-container'>
        <form className="form">
    <p className="title">Create Your Blog <i className="fa-solid fa-file-pen ms-3"></i> </p>
    
        <div className="flex">
       
    </div>       
        
    <label >
        <input className="input mb-3" type="text" placeholder="" required="" />
        <span className='input-span'>Title</span>
    </label>
    <label>
        <textarea className="input pb-5" type="password" placeholder="" required="" />
        <span className='input-span'>Write Your Thought's</span>
    </label>
    <button className="submit">Submit</button>
    
</form>
    </div>
  )
}
