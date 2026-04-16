const UserCard = ({name,age,role,isOnline}) => {
   
  return (
    <div style ={{
        border : "1px solid black",
        padding : "10px",
        margin : "10px",
        borderRadius : "10px",
        width: "auto"
    }}>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{role}</p>
      <p>Status: {isOnline ? "online" : "offline"}</p>
    </div>
  )
}

export default UserCard
