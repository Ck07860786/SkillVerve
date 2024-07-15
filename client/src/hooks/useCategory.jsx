import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/helper/Url'
import toast from 'react-hot-toast'
import { data } from 'autoprefixer'

export default function useCategory() {

    const [categories, setCategories] = useState([])

    const getAllCategories = async()=>{
        try {
            const{data}= await axios.get(`${BASE_URL}/api/v1/category/get-categories`)
            if(data?.success){
                setCategories(data.category)
                console.log(data.category)
            }
            else{
                toast.error('something went wrong')
            }
        } catch (error) {
            toast.error(data.message)
        }
    }

    useEffect(()=>{
        getAllCategories()
    },[])
  return categories
}
