import React, { useEffect, useState } from 'react'

export const UseFetch =(url,method)=> {
    const[data,setData]=useState([]);
    const[error,setError]=useState(null);
    const[isPending,setIsPending]=useState(false);
    const[options,setOptions]=useState(null)


    const optionsData=(data)=>{
        if (method ==='POST'){
            setOptions({
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
        }
    }
    useEffect(()=>{
        const fetchPost =async(options)=>{
            setIsPending(true)
            const response =await fetch(url,{...options});
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

        if (method ==='GET'){
            fetchPost();
        }
       else if(method ==='POST' && options){
            fetchPost(options)
       }
    },[url,method,options])

    return {data,error,isPending,optionsData}
}

export default UseFetch;