import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

const GET_ANIME = gql`
  query GetAnime($title: String!) {
    anime(title: $title) {
      _id
      description
      image
      title
    }
  }
`;

const AnimeSearch = () => {
  const [searchTitle, setSearchTitle] = useState(""); // State to hold the search title
  const { title: defaultTitle } = useParams(); // Get the title from URL params
  const [queryTitle, setQueryTitle] = useState(defaultTitle || ""); // State to hold the query title

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { title: queryTitle },
  });

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value); // Update the local state with the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryTitle(searchTitle); // Update the query title with the input value when the user submits the search
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleFavorite = () => {
    // Implement your favorite functionality here
    alert(`Added ${data.anime.title} to favorites`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={searchTitle} 
          onChange={handleSearchChange} 
          placeholder="Search anime by title" 
          style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '10px' }} 
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: 'lightblue', color: 'white' }}>Search</button>
      </form>
      {data.anime && (
        <div>
          <h1>{data.anime.title}</h1>
          <p>{data.anime.description}</p>
          <img src={data.anime.image} alt={data.anime.title} />
          <button onClick={handleFavorite} style={{ padding: '5px', fontSize: '14px', borderRadius: '3px', border: 'none', backgroundColor: 'lightblue', color: 'white', marginTop: '10px' }}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
