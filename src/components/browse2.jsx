import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Browse2 = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate();

    const showDetail = (item) => {
        props.setDetailDress(item)
        navigate(`/home/browse/info/${item.id}`)
    }

    return (
        <>
        <div className='browse'>
            <div className="search-filter">
                <input className='search-bar' type="text" placeholder='Search' onChange={(event) => setSearchTerm(event.target.value)} /><br />
                <button className='browse-home-button' onClick={() => {navigate('/home');}}>Home</button>
            </div>
            <div className="browse-dress-div">
                {props.dresses.filter((dress) => {
                    if (searchTerm == "") {
                        return dress
                    } else if (dress.color.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return dress
                    } else if (dress.brand.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return dress
                    } else if (dress.size.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return dress
                    } else if (dress.styles.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return dress
                    }
                }).map((dress, i) => {
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
        </div>
        </>
    )
}
  
  export default Browse2