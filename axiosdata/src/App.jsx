import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [counts, setCounts] = useState([])
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> setCounts(res.data) )
         
         .catch((err)=>{
         console.log(err)})
       }, []);

  return (
    <>
     <h1>Axios call</h1>
     <div className="container">
      <div className="row">
       
     {counts.map((count)=>{
      const {id, title, body} =count;
       return <div className='card' key={id}>
        <div className="card-body">
          <h4 className="cart-title">{title.split(0, 10).toUpperCase()}</h4>
          <p>{body.slice(0, 100)}</p>
        
        </div>
       </div>
     })}
     
     </div>
     </div>
    </>
  )
}

export default App
