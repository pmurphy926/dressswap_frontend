const Home = (props) => {
    return (
        <>
            <div className="dresses-grid" key={props.dress.id}>
                <img className="home-grid-image" src={props.dress.imageURL} alt="" />
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