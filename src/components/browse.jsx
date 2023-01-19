import React, {useState, useEffect} from 'react'
import { useNavigate, Form } from "react-router-dom";

const Browse = (props) => {
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults]  = useState([])
    const [dresses, setDresses] = useState([])

    const navigate = useNavigate();

    const showDetail = (item) => {
        props.setDetailDress(item)
        navigate(`/home/browse/info/${item.id}`)
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchValue.length > 0) {
            const searchResults = dresses.filter((results) => {
                return Object.values(results).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
        setFilteredResults(searchResults)
        } else {
        setFilteredResults(dresses)
        }
      }

    return (
        <>
        <div className="search-filter">
            <form className='search-bar-form'>
                <input className='search-bar' type="text" placeholder='Search' onChange={(event) => searchItems(event.target.value)} /> 
            </form>
            <button className='browse-home-button' onClick={() => {navigate('/home');}}>Home</button>
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

