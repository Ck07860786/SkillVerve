import Spinner from '@/components/ui/shared/Spinner'
import { useAuth } from '@/context/authContext'
import { BASE_URL } from '@/helper/Url'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function PrivateRoute() {

    const [ok,setOk] = useState(false)
    const [auth,setAuth]=useAuth()

    useEffect(()=>{
        const checkAuth = async()=>{
            const res = await axios.get(`${BASE_URL}/api/v1/auth/user-auth`,{
                headers:{
                    'Authorization':auth?.token
                }
            })
            if(res.data.ok){
                setOk(true)
            }
            else{
                setOk(false)
            }
        }
        if(auth?.token) checkAuth()
    },[auth?.token])
  return ok ?<Outlet/> : <Spinner path=''/>
}
