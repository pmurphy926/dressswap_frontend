import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Home from './components/home';

const App = () => {

  const getDresses = () => {
    axios
      .get('https://sheltered-basin-22350.herokuapp.com/api/dresses')
      .then(
        (response) => setDresses(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }
   
   useEffect(() => {
    getDresses()
   }, [])
   

  const [dresses, setDresses] = useState([])

  return (
    <>
      <div className="container">
        {dresses.map((dress) => {
          return (
            <Home dress={dress}/>
          )
        })}
      </div>

    </>
  )
}

export default App