import React from 'react'
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
    const navigate = useNavigate();

    const afterDelete = () => {
        props.handleDelete(props.dress)
        navigate('/home/browse')
    }

    return (
        <>
        <div className="item-detail-div">
            <div className="item-detail-images">
                <img className="detail-dress-image" src={props.dress?.imageURL} alt="dress front" />
                <img className="detail-dress-image" src={props.dress?.image2URL} alt="dress back" />
                <img className="detail-dress-image" src={props.dress?.image3URL} alt="dress detail" />
            </div>
            <div className='item-detail-info'>
                <p>Brand: {props.dress?.brand}</p>
                <p>Color: {props.dress?.color}</p>
                <p>Size: {props.dress?.size}</p>
                <button onClick={afterDelete}>Delete Dress</button>
            </div>
        </div>
        </>
    )
}
  
  export default Detail