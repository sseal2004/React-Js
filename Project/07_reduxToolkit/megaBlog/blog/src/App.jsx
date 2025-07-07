import { useEffect, useState } from 'react'
import{useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Footer from './components/footer/Footer'
import Headers from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading]= useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData) {
        dispatch(login())
      }else{
        logout
      }
    }).finally(()=>setLoading(false))
    
  },[])
  return!loading? (
    <>
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

      <div className='w-full black bg-gray-900 text-white p-4'>
        <Headers/>
        <main>
          Todo:<Outlet/>
        </main>
        <Footer/>
        </div>
    </div>
    </>
  ):null
}

export default App
