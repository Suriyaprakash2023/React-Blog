import React,{useState, useEffect} from 'react';
import './CreatePost.css'
import UseFetch from '../../components/Hooks/UseFetch';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [title,setTitle]=useState('')
    const [content,setContent] = useState('')
    const [validationError,setValidationError]=useState('')
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();
    const { data, error, optionsData } = UseFetch('https://jsonplaceholder.typicode.com/posts','POST');
      
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({title,content})

        if(!title){
            setValidationError('Must Enter a Title..!')
            return
        }
        if(!content){
            setValidationError('Must Enter a Content....!')
            return
        }
        setValidationError('')
        console.log({title,body:content,userId:1})
        optionsData({title,body:content,userId:1})
    }
    useEffect(() => {
        if (validationError) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
            }, 7000);

            // Clear the timer if the component unmounts or if validationError changes
            return () => clearTimeout(timer);
        }
    }, [validationError]);

    const handleCloseError = () => {
        setShowError(false);
    };

    useEffect(()=>{
        if (data.length !==0){
            const timer = setTimeout(()=> navigate('/'),3000);
            return ()=> clearTimeout(timer)
        }
    },[data,navigate])
  return (
    <div className='form-container'>
        
        <form className="form" onSubmit={handleSubmit}>
        {showError && validationError &&
            (
                <div className="alert alert-danger" role="alert" >
                    {validationError}
                    <button className='alert-button' onClick={handleCloseError}> × </button>
                </div>
            )
        }

        {
            data.length !== 0 && 
            (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your Blog Created Successfully ..!
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="alert" 
                        aria-label="Close"
                        onClick={handleCloseError}
                    ></button>
                </div>
            )
        }

        {
            error && <div className="alert alert-danger" role="alert" >
            {error}
            <button className='alert-button' onClick={handleCloseError}> × </button>
        </div>
        }
        

    <p className="title">Create Your Blog <i className="fa-solid fa-file-pen ms-3"></i> </p>
    
        <div className="flex">
       
    </div>       
        
    <label >
        <input className="input mb-3" type="text" placeholder="" required="" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <span className='input-span'>Title</span>
    </label>
    <label>
        <textarea className="input pb-5" type="password" placeholder="" required="" value={content} onChange={(e)=>setContent(e.target.value)}/>
        <span className='input-span'>Write Your Thought's</span>
        
    </label>

    <button className="submit">Create Post</button>
    
</form>
    </div>
  )
}
