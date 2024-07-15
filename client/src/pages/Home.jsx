import Categories from '@/components/ui/shared/Categories'
import Courses from '@/components/ui/shared/Courses'
import Footer from '@/components/ui/shared/layout/Footer'
import Header from '@/components/ui/shared/layout/Header'
import { useAuth } from '@/context/authContext'
import React from 'react'

function Home() {
  const [auth, setAuth] = useAuth();

  return (
    <>

      <Header />
      <div className='w-full mt-5'>
        <img src='https://www.skillshiksha.com/assets/upload/images/Learn%20Anytime%20Any%20Where%20Skill%20Shiksha%20Banner.jpg' alt='banner' />
      </div>
      <Categories />
      <Courses />
      <Footer/>
     
    
       
      
    </>
  )
}

export default Home;
