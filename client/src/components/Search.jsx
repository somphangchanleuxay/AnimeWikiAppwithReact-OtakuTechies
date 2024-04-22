import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../../src/css/Button.css';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [rememberedSearch, setRememberedSearch] = useState('');

  // Load remembered search term from local storage on component mount
  useEffect(() => {
    const savedSearch = localStorage.getItem('searchQuery');
    if (savedSearch) {
      setRememberedSearch(savedSearch);
    }
  }, []);

  // const handleSearch = async () => {
  //   // Call the onSearch callback with the searchQuery
  //   onSearch(searchQuery);

    // Save search query to local storage
    localStorage.setItem('searchQuery', searchQuery);

    // Example fetch logic (replace with your actual fetch logic)
    const response = await fetch(`/api/search?query=${searchQuery}`); // Fixed the fetch URL
    const data = await response.json();

    // Update searchResults state with fetched data
    setSearchResults(data);
  };

  const handleFavorite = (resultId) => {
    // Handle favorite button click for a specific result
    // Implement your logic to add/remove from favorites
    console.log('Toggle favorite for result:', resultId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery || rememberedSearch} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '10px' }} 
      />
      <button 
        onClick={handleSearch} 
        className="searchButton"
      >
        Search
      </button>

      {/* Render divs based on searchResults */}
      {searchResults.map((result) => (
        <div key={result.id} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
          <h2>{result.title}</h2>
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }} >{result.description}</p>
          <img src={result.image} alt={result.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <button onClick={() => handleFavorite(result.id)} className="favoriteButton">
          <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Search;
