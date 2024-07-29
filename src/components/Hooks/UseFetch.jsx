import React, { useEffect, useState } from 'react'

export const UseFetch =(url)=> {
    const[data,setData]=useState([]);
    const[error,setError]=useState(null);
    const[isPending,setIsPending]=useState(false)

    useEffect(()=>{
        const fetchPost =async()=>{
            setIsPending(true)
            const response =await fetch(url);
            const jsonResponse =await response.json();

            if (response.ok ){
                setData(jsonResponse);
                setError("");
                setIsPending(false);
            }
            if (!response.ok){
                setError(jsonResponse.error);
                setIsPending(false);
            }
        };
        fetchPost();
    },[url])

    return {data,error,isPending}
}

export default UseFetch;