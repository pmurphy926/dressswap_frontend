import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Add from './components/add';
import Login from './components/login';
import Browse from './components/browse';
import Browse2 from './components/browse2';
import Detail from './components/detail';
import Edit from './components/edit';

const App = () => {

  const [dresses, setDresses] = useState([])
  const [detailDress, setDetailDress] = useState()

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

   const handleUpdate = (item) => {
    axios
      .put('https://sheltered-basin-22350.herokuapp.com/api/dresses/'+ item.id, item)
      .then((response)=>{
        setDetailDress(response.data)
        getDresses()
      })
  }

  const handleDelete = (item) => {
    axios
      .delete('https://sheltered-basin-22350.herokuapp.com/api/dresses/' + item.id)
      .then((response) => {
        getDresses()
      })
  }
   
   useEffect(() => {
    getDresses()
   }, [])

  

  return (
    <>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='/home' element={< Home dresses={dresses} />} />
          <Route path='home/browse' element={< Browse2 dresses={dresses} detailDress={detailDress} setDetailDress={setDetailDress}/>}/>
          <Route path='home/browse/info/:id' element={< Detail dress={detailDress} handleDelete={handleDelete} />} />
          <Route path='/edit' element={< Edit dress={detailDress} handleUpdate={handleUpdate} />} />
          <Route path='home/add' element={< Add handleCreate={handleCreate} />} />
        </Routes>
        {/* start routes with slashes */}
    </>
  )
}

export default App
      