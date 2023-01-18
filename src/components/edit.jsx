import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Edit = (props) => {
    const navigate = useNavigate();

    const [dress, setDress] = useState({...props.dress})

    const handleChange = (event) =>{
        setDress({...dress, [event.target.name] : event.target.value})
    }

    const editDress = (event) => {
        event.preventDefault()
        props.handleUpdate(dress)
        navigate(`/home/browse/info/${dress.id}`)
    }

    return (
        <>
        <form onSubmit={editDress}>
        <label htmlFor="color">Color: </label>
        <input type="text" name="color" placeholder={props.dress.color} onChange={handleChange}/>
        <br />
        <label htmlFor="brand">Brand: </label>
        <input type="text" name="brand" placeholder={props.dress.brand} onChange={handleChange}/>
        <br />
        <label htmlFor="styles">Styles: </label>
        <input type="text" name="styles" placeholder={props.dress.styles} onChange={handleChange}/>
        <br />
        <label htmlFor="size">Size: </label>
        <input type="text" name="size" placeholder={props.dress.size} onChange={handleChange}/>
        <br />
        <label htmlFor="imageURL">Image #1: </label>
        <input type="text" name="imageURL" placeholder={props.dress.imageURL} onChange={handleChange}/>
        <br />
        <label htmlFor="image2URL">Image #2: </label>
        <input type="text" name="image2URL" placeholder={props.dress.image2URL} onChange={handleChange}/>
        <br />
        <label htmlFor="image3URL">Image #3: </label>
        <input type="text" name="image3URL" placeholder={props.dress.image3URL} onChange={handleChange}/>
        <br />
        <input type="submit" value='Submit Changes'/>
        </form>
        <button onClick={() => {navigate(-1);}}>Cancel</button>
        </>
    )
}
  
  export default Edit