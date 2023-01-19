import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

const Home = (props) => {
    const navigate = useNavigate();
    const {logout} = useAuth0();

    return (
        <>
        <div className="home-banner">
            <h3 className='home-heading'>Welcome, user</h3>
        </div>
        <div className="home-buttons-div">
            <button className='home-button' onClick={() => {navigate('/home/browse');}}>Browse</button>
            <button className='home-button' onClick={() => {navigate('/home/add');}}>Add</button>
            <button className="home-button">Wishlist</button>
            <button className="home-button">Profile</button>
            <button className="home-button">Settings</button>
            <button className="home-button" onClick={() => logout()}>Log Out</button>
        </div>
        </>
    )
}
  
  export default Home
