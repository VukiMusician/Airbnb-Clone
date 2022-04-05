import React from 'react'
import '../styles/searchResult.scss';
import { FavoriteBorder } from '@material-ui/icons';
import Star from '@material-ui/icons/Star'

function SearchResult({
    img , location, tittle, description, star, price, total}) 
    {
  return (
    <div className='searchResult'>
        <img src={img} alt="/" />
        <div className="searchResult__heart">
        <FavoriteBorder/>
        </div>
        <div className="searchResult__info">
        
        <div className="searchResult__infoTop">
        <p>{location}</p>
        <h3>{tittle}</h3>
        <p>____</p>
        <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
            <Star className="searchResult__star"/>
            <p>
                <strong>{star}</strong>
            </p>
            </div>
            <div className="searchResult__price">
                <h2>{price}</h2>
                <p>{total}</p>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default SearchResult