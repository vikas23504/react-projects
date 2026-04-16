// import React, { useState } from 'react'
// import "./App.css"

// const App = () => {
//   const[task , setTask] =useState("");
//   const[tasks , settasks] = useState([]);
//   const[edits ,setedit] = useState(null)

//    const addtask = ()=>{
//      if (task.trim() === "") return; 

//      if(edits !== null){
//       const newArr = [...tasks];
//       newArr[edits] = task
//       settasks(newArr);

//       setedit(null)
//       setTask("")
//      }else{
//     settasks( [...tasks , task]);
//     setTask("");
//    }}

//    const dlt = (index) => {
//   const newArr = tasks.filter((_ ,i) => i !== index);
//   settasks(newArr);
// };

//   const edit = (index , element)=>{
//     setTask(element)
//     setedit(index)
//   }

//   //  const dlt = (index)=>{
//   //    let newArr = [];
//   //    for(let i = 0; i <tasks.length ; i++){
//   //     if (i !== index){
//   //       newArr.push(tasks[i])
//   //     }
//   //    }
//   //     settasks(newArr)
//   //  }

//   return (
//     <div>
//       <input 
//       type="text"
//       value={task}
//       onChange={(e)=>setTask(e.target.value)}
//       />

//       <button onClick={addtask}>Add</button>

//       <ul>
//         {tasks.map((ele , index)=>(
//           <li key={index}>{ele}
//           <button onClick={()=> dlt(index)}>Delete</button>
//           <button onClick={()=>edit(index,ele)}>Edit</button>
//           </li>
          
//         ))}
//       </ul>
      
//     </div>
//   )
// }

// export default App


import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default App;