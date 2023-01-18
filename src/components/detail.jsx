import React from 'react'
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
    const navigate = useNavigate();

    const afterDelete = () => {
        props.handleDelete(props.dress)
        navigate('/home/browse')
    }

    const showEdit = () => {
        navigate('/edit')
    }

    return (
        <>
        <div className="item-detail-div">
            <div className="item-detail-images-div">
                <img className="detail-dress-image" src={props.dress?.imageURL} alt="dress front" />
                <img className="detail-dress-image" src={props.dress?.image2URL} alt="dress back" />
                <img className="detail-dress-image" src={props.dress?.image3URL} alt="dress detail" />
            </div>
            <div className='item-detail-info'>
                <p>Brand: {props.dress?.brand}</p>
                <p>Color: {props.dress?.color}</p>
                <p>Size: {props.dress?.size}</p>
                <button onClick={afterDelete}>Delete Dress</button>
                <button onClick={showEdit}>Edit Dress</button>
                <button onClick={() => {navigate('/home/browse');}}>Back to Browse</button>
            </div>
        </div>
        </>
    )
}
  
  export default Detail