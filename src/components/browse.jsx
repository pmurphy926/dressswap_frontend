const Browse = (props) => {
    return (
        <>
        <div className="search-filter">
            <form action="" method="POST">
                <input class="search" type="text" name="" placeholder="Search" />
            </form>

        {/* <div className='sort-button-div'>
            {filter.map((type) => {
              return (
                <button className='sort-button' onClick={() => { filterClothes(type) }}>{type}</button>
              )
            })}
            <button className='sort-button' onClick={()=> {getClothes()}}>full collection</button>
          </div> */}
        </div>

        
        <div className="browse-dress-div">
            {props.dresses.map((dress) => {
            return (
                <>
                <div >
                    <h4>{dress.color} {dress.brand} dress</h4>
                    <div className="browse-dress-images-div">
                        <img className="browse-dress-image" src={dress.imageURL} alt="dress front" />
                        <img className="browse-dress-image" src={dress.image2URL} alt="dress back" />
                        <img className="browse-dress-image" src={dress.image3URL} alt="dress detail" />
                    </div>
                </div>
                </>
            )
            })}
        </div>
        </>
    )
}
  
  export default Browse