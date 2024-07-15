
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp  from './auth/Signup'
import Login from './auth/Login'
import {Toaster} from 'react-hot-toast'
import Hero from './pages/Hero'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/admin/Dashboard'
import UserDashboard from './pages/user/UserDashboard'
import AdminRoute from './routes/AdminRoute'
import CreateCategory from './pages/admin/CreateCategory'
import CreateCourse from './pages/admin/CreateCourse'
import AllCourses from './pages/admin/AllCourses'
import UpdateCourse from './pages/admin/UpdateCourse'
import CourseDetail from './pages/CourseDetail'
import CourseCategory from './pages/CourseCategory'
import UserProfile from './pages/user/UserProfile'
import AdminProfile from './pages/admin/AdminProfile'
import Course from './pages/user/Course'



function App() {
  
  return (
    <>
  <Routes>
  <Route path="/register" element={<SignUp isAdmin={false} />} />
  <Route path="/register-admin" element={<SignUp isAdmin={true} />} />
    <Route path='/category/:slug' element={<CourseCategory/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/skills/:slug' element={<CourseDetail/>}/>

    <Route path='/dashboard' element={<PrivateRoute/>}>
    <Route path='user'element={<UserDashboard/>}/>
    <Route path='user/profile'element={<UserProfile/>}/>
    <Route path='user/skills'element={<Course/>}/>
    </Route>
    <Route path='/dashboard' element={<AdminRoute/>}>
    <Route path='admin'element={<Dashboard/>}/>
    <Route path='admin/create-category'element={<CreateCategory/>}/>
    <Route path='admin/create-course'element={<CreateCourse/>}/>
    <Route path='admin/skills'element={<AllCourses/>}/>
    <Route path='admin/skills/:slug'element={<UpdateCourse/>}/>
    <Route path='admin/profile'element={<AdminProfile/>}/>
    </Route>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/' element={<Hero/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  <Toaster/>
  </>
  
  )
}

export default App
