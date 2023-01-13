import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

const Home = (props) => {

    const {logout} = useAuth0();

    return (
        <>
        <div className="dresses-grid">
            {props.dresses.map((dress) => {
                return (
                    <div className="dresses-container" key={dress.id}>
                        <img className="home-grid-image" src={dress.imageURL} alt="" />
                    </div> 
                )
            })}
        </div>

        <div className="home-buttons-div">
            <Link to={`browse`}><button className="home-button">Browse</button></Link>
            <Link to={`add`}><button className="home-button">Add Dress</button></Link>
            <button className="home-button">Wishlist</button>
            <button className="home-button">Profile</button>
            <button className="home-button">Settings</button>
            <button className="home-button" onClick={() => logout()}>Log Out</button>
        </div>
        </>
    )
}
  
  export default Home
