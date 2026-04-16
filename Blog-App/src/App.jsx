import React, { useEffect, useState } from 'react'

const App = () => {
    const[movie , setmovie] = useState([]);
    const [search ,setsearch] = useState("batman");
    const [loading , setloading] = useState(false);
    const[favorites , setfavorites] = useState([])

    useEffect( ()=>{
        setloading(true);
       fetch(`https://www.omdbapi.com/?apikey=76aa1f9d&s=${search}`)
       
        .then( (res) => res.json())
        .then((data)=>{
            if(data.Response === "True"){
            setmovie(data.Search)
            } else {
                setmovie([])
            }
            setloading(false)
        })
    },[search])

    useEffect(() => {
  localStorage.setItem("favMovies", JSON.stringify(favorites))
}, [favorites])

   
  return (
    
    <div>
        <input 
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        />


        {/* loading wala part */}
        {loading ? <h2>Loading ...</h2> : movie.length > 0 ? ( movie.map((item)=>(
            <div key={item.imdbID}>
                <h2>{item.Title}</h2>
                <p>{item.Year}</p>
                <img src={item.Poster} alt=" movie poster" />
                <button onClick={()=>setfavorites([...favorites , item ])}>Add to favorites</button>
                
            </div>
        ))): (
            <h2>No movies found</h2>
        )}
    
    </div>
  )
}

export default App
