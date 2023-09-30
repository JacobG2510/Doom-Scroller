import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css'; // Import the CSS file
import SingleResult from '../Components/SingleResult';
const apiURL="http://localhost:3001"
const Search = () => {
  const [listings, setListings] = useState([]);
  const [addressFilter, setAddressFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

 

  const fetchHouseListings = async () => {
    try {
      // Replace 'YOUR_ZILLOW_API_ENDPOINT' with the actual Zillow API endpoint
      const response = await axios.post(apiURL+"/zillow", {
        address: addressFilter,
        minPrice: minPrice,
        maxPrice: maxPrice,
      });
      console.log(response.data)
      setListings(response.data); // Assuming the API response contains house listings
    } catch (error) {
      console.error('Error fetching house listings:', error);
    }
  };

  const filterListings = () => {
    fetchHouseListings();
  };

  return (
    <div className="container">
      <div className="container__wrapper">
        <div className="container__content">
          <h1>House Listings</h1>
          <input
            type="text"
            placeholder="Filter by Address"
            value={addressFilter}
            onChange={(e) => setAddressFilter(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className="container__btn" onClick={filterListings}>
            Filter
         </button>
        </div>
        <div className="container__img--container">
          <div className="container__img--card">
            <i className="fa fa-layer-group"></i>
          </div>
          <div className="container__img--card" id="card-2">
            <i className="fa fa-users"></i>
          </div>
        </div>
      </div>

{listings && listings.results && listings.results.map(item=>{
    return <SingleResult result={item} />
})}
    </div>
  );
};

export default Search;