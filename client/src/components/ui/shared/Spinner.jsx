import React from 'react'
import { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Spinner({path = 'login'}) {
    const [count,setCount]= useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const intervel = setInterval(() => {
            setCount((prevValue)=> --prevValue)
        }, 1000);
         count===0 && navigate(`/${path}`,{
            state:location.pathname
         })
         return()=> clearInterval(intervel)
    },[count,navigate,location])
  return (
    <>
<span className="loading loading-dots mt-56 loading-lg"></span>
<p  className=' font-Inter'>  you are redirected in {count} seconds </p>
    </>
  )
}

export default Spinner