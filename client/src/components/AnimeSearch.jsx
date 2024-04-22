import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import '../css/Button.css';

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
  const [searchTitle, setSearchTitle] = useState("");
  const { title: defaultTitle } = useParams();
  const [queryTitle, setQueryTitle] = useState(defaultTitle || "");

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { title: queryTitle },
  });

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryTitle(searchTitle);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleFavorite = () => {
    alert(`Added ${data.anime.title} to favorites`);
  };

  const handleUnfavorite = () => {
    alert(`Removed ${data.anime.title} from favorites`);
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
        <button type="submit" className="searchButton">Search</button>
      </form>
      {data.anime && (
        <div className="searchResultContainer">
          <img src={data.anime.image} alt={data.anime.title} />
          <FaHeart className="heartIcon" onClick={handleFavorite} />
          <h1>{data.anime.title}</h1>
          <p>{data.anime.description}</p>
          <button className="unfavoriteButton" onClick={handleUnfavorite}>Unfavorite</button>
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
