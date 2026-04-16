import UserCard from "./components/UserCard"

const App = () => {

  const user = [
    {name : "vikas" , age :20 , role :"mernStack dev" , isOnline: true},
    {name : "ankit" , age :21 , role :"fullStack dev" , isOnline: false},
    {name : "ashish" , age :21 , role :"mernStack dev" , isOnline: true}

  ]
  return (
    <div>
      <h1>user list</h1>
      {user.map((user )=>(
        <UserCard  
        key ={user.name}
        name = {user.name}
        role = {user.role}
        age = {user.age}
        isOnline={user.isOnline}
        />
      ))}
      

    

    </div>
  )
}

export default App
