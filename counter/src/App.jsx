import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter,setcount]= useState(0)

  // let counter = 0
  const addValue = ()=>{
   counter = counter+1
   setcount(counter)
   
   
  }
  const subValue = ()=>{
    
      setcount(counter-1)
   
    
  }
  const restart = ()=>{
    setcount(counter=0)
  }
  return (
    <>
     <h1>Counter app</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>add value</button>
   
     <button onClick={subValue}>subtract value</button>
       <br />
     <button onClick={restart}>Restart</button>
    </>
  )
}

export default App
