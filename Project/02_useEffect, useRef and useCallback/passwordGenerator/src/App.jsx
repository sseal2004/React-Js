import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  // useState is the default value of length is 8
  const [length, setlength] = useState(8)
  // useState is the default value of number is false
  const [numAllowed,setAllowed]= useState(false)
    // useState is the default value of character is false
  const [charAllowed,setChar] = useState(false)
  //in input box
  const [password,setPassword] = useState("")
   //useRef hook
 const passwordRef = useRef(null)
 

  /*useCallback
useCallback is a React Hook that lets you cache a function definition between re-renders.
const passwordGenerator = useCallback(fn, dependencies)
Calling a same function multiple time using useCallback
Numbers,characters are the dependencies
*/

  //Password Generator
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()<>:-~+_?;"
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  //UseEffect hook
  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

//Copy clipboard memthod
const copyPaswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,6);
  window.navigator.clipboard.writeText(password)
},[password])


  return (
    <>
   <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-3 py-4 rounded-3xl">
  <div className="w-full max-w-2xl bg-gray-800 text-orange-400 p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(255,115,0,0.2)] border border-orange-500">
    
    {/* Title */}
    <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-wide drop-shadow-md">
      Password Generator 🔐
    </h1>

    {/* Input + Copy */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-gray-100 rounded-xl overflow-hidden shadow-inner mb-6">
      <input
        type="text"
        value={password}
        className="w-full text-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Generated password"
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPaswordToClipboard}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 sm:py-3 transition-all duration-200"
      >
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="grid sm:grid-cols-3 gap-5">
      
      {/* Range */}
      <div className="flex flex-col items-start gap-2">
        <label className="text-lg font-semibold text-white">Length: {length}</label>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="w-full accent-orange-400"
          onChange={(e) => setlength(e.target.value)}
        />
      </div>

      {/* Numbers */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          className="accent-orange-500 w-5 h-5"
          onChange={() => setAllowed((prev) => !prev)}
        />
        <label htmlFor="numberInput" className="text-lg font-medium">Include Numbers</label>
      </div>

      {/* Characters */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          className="accent-orange-500 w-5 h-5"
          onChange={() => setChar((prev) => !prev)}
        />
        <label htmlFor="charInput" className="text-lg font-medium">Include Symbols</label>
      </div>

    </div>
  </div>
</div>

    </>
  )
}

export default App
