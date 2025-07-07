// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

//To add tailwind follow this 
//https://v3.tailwindcss.com/docs/guides/vite
//dev.io
function App() {

  /* let myObj = {
    username:"Soumyadipta",
    Age:"20"
   }
   let arr =[2,3,4,5]*/
  return (
    <>  
    <h1 className='bg-green-950 text-gray-200 p-4 rounded-xl '>Tailwind Test</h1> 
    {/* To pass arr or any object */}
    {/* <Card channel="chaiaurcode" someObj ={myObj} NewArr= {arr}/> */}
    <Card country="AMERICAN" money="$1000"/>

      {/* <Card/> */}
    </>
    
    
  )
}

export default App
