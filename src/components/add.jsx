import React, { useState, useEffect } from 'react'

const Add = (props) => {

  let newDress = { name: '', age: '' }
  const [dress, setDress] = useState(newDress)
  
  const handleChange = (event) => {
    setDress({ ...dress, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(dress)
  }  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color: </label>
        <input type="text" name="color" value={dress.color} onChange={handleChange}/>
        <br />
        <label htmlFor="brand">Brand: </label>
        <input type="text" name="brand" value={dress.brand} onChange={handleChange}/>
        <br />
        <label htmlFor="styles">Styles: </label>
        <input type="text" name="styles" value={dress.styles} onChange={handleChange}/>
        <br />
        <label htmlFor="size">Size: </label>
        <input type="text" name="size" value={dress.size} onChange={handleChange}/>
        <br />
        <label htmlFor="imageURL">Image #1: </label>
        <input type="text" name="imageURL" value={dress.imageURL} onChange={handleChange}/>
        <br />
        <label htmlFor="image2URL">Image #2: </label>
        <input type="text" name="image2URL" value={dress.image2URL} onChange={handleChange}/>
        <br />
        <label htmlFor="image3URL">Image #3: </label>
        <input type="text" name="image3URL" value={dress.image3URL} onChange={handleChange}/>
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Add
