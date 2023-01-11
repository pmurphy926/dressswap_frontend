const Home = (props) => {
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
                <button className="home-button">Home</button>
                <button className="home-button">Add Dress</button>
                <button className="home-button">Wishlist</button>
                <button className="home-button">Profile</button>
                <button className="home-button">Settings</button>
            </div>
        </>
    )
}
  
  export default Home
