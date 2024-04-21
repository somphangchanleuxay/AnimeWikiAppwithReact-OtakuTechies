import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Call the onSearch callback with the searchQuery
    onSearch(searchQuery);

    // Example fetch logic (replace with your actual fetch logic)
    const response = await fetch(`/api/search?query=${searchQuery}`); // Fixed the fetch URL
    const data = await response.json();

    // Update searchResults state with fetched data
    setSearchResults(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '10px' }} 
      />
      <button 
        onClick={handleSearch} 
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Search
      </button>

      {/* Render divs based on searchResults */}
      {searchResults.map((result) => (
        <div key={result.id} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          <img src={result.image} alt={result.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      ))}
    </div>
  );
};

export default Search;
