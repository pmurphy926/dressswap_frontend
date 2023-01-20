import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

const Detail = (props) => {
    const navigate = useNavigate();
    const {logout} = useAuth0();

    const afterDelete = () => {
        props.handleDelete(props.dress)
        navigate('/home/browse')
    }

    const showEdit = () => {
        navigate('/edit')
    }

    const addToWishlist = () => {
        props.setWishlist([props.dress])
        console.log(props.wishlist)
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
                <p>Style: {props.dress?.styles}</p>
            </div>
            <div className='item-detail-buttons-div'>
                <button className='item-detail-button' onClick={afterDelete}>Delete Dress</button>
                <button className='item-detail-button' onClick={showEdit}>Edit Dress</button>
                <button className='item-detail-button' onClick={addToWishlist}>Add to Wishlist</button>
                <button className='item-detail-button' onClick={() => {navigate('/home/browse');}}>Back to Browse</button>
            </div>
        </div>
        </>
    )
}
  
  export default Detail