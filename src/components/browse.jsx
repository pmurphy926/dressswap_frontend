import React from 'react'
import { useNavigate } from "react-router-dom";

const Browse = (props) => {
    const navigate = useNavigate();

    const showDetail = (item) => {
        props.setDetailDress(item)
        navigate(`/home/browse/info/${item.id}`)
    }

    return (
        <>
        <div className="search-filter">
            <form action="" method="POST">
                <input className="search" type="text" name="" placeholder="Search" />
            </form>
        </div>

        
        <div className="browse-dress-div">
            {props.dresses.map((dress, i) => {
            return (
                  <div className="browse-tem-div" key={i} onClick={() => {showDetail(dress)}}>
                        <h4>{dress.color} {dress.brand} dress</h4>
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
    )
}
  
  export default Browse

