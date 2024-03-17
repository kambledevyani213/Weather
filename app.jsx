import { useState } from "react"

const App = () => {
   const[search,setSearch]=useState("")
   const[weather,setWeather]=useState({})

   const api ={
      key :"ba54df560ab0865394927e0a9577a250",
      base :"https://api.openweathermap.org/data/3.0/weather"
   }

   function handleSearch(){
      fetch(`${api.base}?q=${search}&APIID={api.key}`)
      .then(res=>res.json())
      .then(d=>setWeather(d))

   }
  return (
    <div>
      <section>
         <input onChange={(e)=>setSearch(e.target.value)} type="search"></input>
         <button onClick={handleSearch}>search</button>
         {(typeof weather.main!=="undefined")?(
            <div>
               <p>{weather.name}</p>
               <p>{weather.name.temp}</p>
               <p>{weather.weather[0].main}</p>
               <p>{weather.weather[0].desctiption}</p>

            </div>

         ):("Not found")}
      </section>
    </div>
  )
}

export default App
