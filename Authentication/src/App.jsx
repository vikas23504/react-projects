import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const[email , setemail] = useState("");
  const[password , setpassword] = useState("");
  const[message , setmessage] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email == "vikas230704@gmail.com" && password == "Vikas@123"){
      setmessage("you have entered right email ");
     
      
      
    }else{
      setmessage("you have not entered right email");
    }

    
  }

  const btn = ()=>{
      console.log("your ermail is : " ,email);
      console.log("your password is  : " , password);
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        <input
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
         />
      </label>

      {/* password */}

      <input 
      type="password"
      value={password}
      onChange={(e)=> setpassword(e.target.value)}
       />

      <button type='submit' onClick={btn}>Submit</button>

      <h2>{message}</h2>

      </form>

    
    </div>
  )
}

export default App
