import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
  const navigate = useNavigate();
  let newDress = { name: '', age: '' }
  const [dress, setDress] = useState(newDress)
  
  const handleChange = (event) => {
    setDress({ ...dress, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(dress)
    navigate('/home');
  }  

  return (
    <>
    <div className='add-form'>
      <h3>Add a Dress:</h3>
      <form onSubmit={handleSubmit}>
        <input className='add-form-input' type="text" name="color" placeholder='Color' value={dress.color} onChange={handleChange}/>
        <br />
        <input className='add-form-input' type="text" name="brand" placeholder='Brand' value={dress.brand} onChange={handleChange}/>
        <br />
        <input className='add-form-input' type="text" name="styles" placeholder='Styles (Separate with Comma)' value={dress.styles} onChange={handleChange}/>
        <br />
        <input className='add-form-input' type="text" name="size" placeholder='Size' value={dress.size} onChange={handleChange}/>
        <br />
        <input className='add-form-input' type="text" name="imageURL" placeholder='Image: Front' value={dress.imageURL} onChange={handleChange}/>
        <br />
        <input className='add-form-input' type="text" name="image2URL" placeholder='Image: Back' value={dress.image2URL} onChange={handleChange}/>
        <br />
        <input className='add-form-input' type="text" name="image3URL" placeholder='Image: Detail' value={dress.image3URL} onChange={handleChange}/>
        <br />
        <input className='add-submit-button' type="submit" /><br />
        <button className='add-submit-button' onClick={() => {navigate(-1);}}>Cancel</button>
      </form>
      </div>
    </>
  )
}

export default Add
