import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Add from './components/add';
import Login from './components/login';
import Browse from './components/browse';

const App = () => {

  const handleCreate = (addDress) => {
    axios
      .post('https://sheltered-basin-22350.herokuapp.com/api/dresses', addDress)
      .then((response) => {
        getDresses()
      })
  }

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
        <Routes>
          <Route path='/' element={< Login />} />
        </Routes>
    </>
  )
}

export default App


    {/* <Login />
      <div className="container">
        <Home dresses={dresses}/>
        <Add handleCreate={handleCreate}/>
        <Browse dresses={dresses}/>
      </div> */}

      