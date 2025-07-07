import { useState } from 'react'
import React from 'react'
import './App.css'
//We use react for multiple declaration of same variable but in dom it is quiete difficult

//REACT DOCUMENTATION
// https://github.dev/facebook/react/blob/main/packages/react-reconciler/src/ReactCurrentFiber.js
// https://github.dev/facebook/react/blob/main/packages/react-reconciler/src/ReactCurrentFiber.js
//react ---> src-->reacthooks.js
function App() {

    //To update counter 
    const [counter,setCounter] = useState(15)  
    //let counter = 15

    const addvalue = () => {
      // console.log("AddValue",Math.floor(Math.random()*100))

      // console.log("Added value",counter)
            // counter = counter + 1

      setCounter(counter+1)
      

    }
    const removeValue = () =>{
      //  counter = counter - 1
      //  console.log("Removed value",counter)
      setCounter(counter-1)

    }

    
  
 return(
  <>

    <h1>Welcome to React</h1>  
    <h2>Counter value: {counter}</h2>

    <button onClick = {addvalue}>Add value</button>
    <br />
    <button onClick = {removeValue}>Remove Value</button>
    <div>footer:{counter} </div>
    
  </>
 )
}

export default App
