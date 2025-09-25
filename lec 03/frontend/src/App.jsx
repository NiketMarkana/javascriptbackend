import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
//import { response } from 'express'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })


  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        console.log(jokes)
        
      }
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            {/* Without keys, React might re-render the whole list even if only one item changed.
            With keys, React updates only the changed item → much faster and fewer bugs. */}
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
