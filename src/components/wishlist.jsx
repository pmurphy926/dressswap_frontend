import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Wishlist = (props) => {
    const { user } = useAuth0();
    const navigate = useNavigate();

    const showDetail = (item) => {
        props.setDetailDress(item)
        navigate(`/home/browse/info/${item.id}`)
      }
  
    return (
        <>
        {console.log(props.wishlist)}
        <div className="wishlist-banner">
        <img className="profile-image" src={user.picture} alt={user.name} />
        <h2 className="profile-name">{user.name}'s Wishlist</h2>
        <button className='browse-home-button' onClick={() => {navigate('/home');}}>Home</button>
        </div>
        <div className="wishlist-items-div">
          {props.wishlist.map((dress, i) => {
                return (
                    <div className="browse-item-div" key={i} onClick={() => {showDetail(dress)}}>
                            <h4 className='browse-item-heading'>{dress.color} {dress.brand} dress</h4>
                            <div className="browse-dress-images-div">
                                <img className="browse-dress-image" src={dress.imageURL} alt="dress front" />
                                <img className="browse-dress-image" src={dress.image2URL} alt="dress back" />
                                <img className="browse-dress-image" src={dress.image3URL} alt="dress detail" />
                            </div>
                        </div>
                        
                )
                })}
        </div>
        </>
    );
  };
  
  export default Wishlist;