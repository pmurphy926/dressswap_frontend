import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const {logout} = useAuth0();

  return (
    
    isAuthenticated && (
      <>
      <div className="profile-info-div">
        <img className="profile-image" src={user.picture} alt={user.name} />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
      </div>
        <div className="profile-page-buttons">
        <button className='profile-page-button' onClick={() => {navigate('/home');}}>Home</button>
        <button className="profile-page-button" onClick={() => {navigate('/wishlist');}}>Wishlist</button>
        <button className="profile-page-button" onClick={() => logout()}>Log Out</button>
      </div>
      </>
    )
  );
};

export default Profile;