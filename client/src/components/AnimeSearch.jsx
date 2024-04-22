import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import Autosuggest from 'react-autosuggest';
import loadingGif from './LoadingGIF.webp';
import errorGif from './ErrorGIF.gif';
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

const FAV_ADD = gql`
mutation Mutation($title: String!, $someone: String!) {
  favAdd(title: $title, someone: $someone) {
    _id
    email
    favorites
    username
  }
}
`

const FAV_REMOVE = gql`
mutation Mutation($someone: String!, $title: String!) {
  favRemove(someone: $someone, title: $title) {
    _id
    email
    favorites
    username
  }
}
`
const AnimeSearch = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const { title: defaultTitle } = useParams();
  const [queryTitle, setQueryTitle] = useState(defaultTitle || '');
  const [isFavorite, setIsFavorite] = useState(false); // Track favorite status
  const [searched, setSearched] = useState(false); // Track if search button was pressed
  const [suggestions, setSuggestions] = useState([]); // Suggestions state

  const animeTitles = [
    "My Hero Academia",
    "Attack on Titan",
    "SPY x FAMILY",
    "Death Note",
    "Solo Leveling",
    "One Piece",
    "Hunter x Hunter (2011)",
    "One-Punch Man",
    "Tokyo Ghoul",
    "Chainsaw Man"
  ];

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { title: queryTitle },
  });

  const [favAdd] = useMutation(FAV_ADD,
    {
      variables: { someone: "Brian Kernighan", title: "My Hero Academia" },
      onCompleted: (data) => {
      }
    });

  const[favRemove] = useMutation(FAV_REMOVE,
    {
      variables: { someone: "Brian Kernighan", title: "My Hero Academia" },
      onCompleted: (data) => {
      }
    });

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);

  const handleSearchChange = (e, { newValue }) => {
    setSearchTitle(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryTitle(searchTitle);
    setSearched(true); // Set searched to true when search button is pressed
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status
     
    if (isFavorite) {
      favRemove();
    }
    else {
       favAdd();
    }
    
  };

  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.trim().toLowerCase();
    return animeTitles.filter(
      (title) => title.toLowerCase().startsWith(inputValueLowerCase)
    ).map((title) => ({ title }));
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Search anime by title',
    value: searchTitle,
    onChange: handleSearchChange,
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => suggestion.title}
          renderSuggestion={(suggestion) => <div>{suggestion.title}</div>}
          inputProps={inputProps}
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
      {!loading && !data?.anime && searched && (
  <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
    <img src={errorGif} alt="Error" />
    <p style={{ fontWeight: 'bold', fontSize: '24px' }}>No results found.</p>
  </div>
      )}
      {data?.anime && (
        <div className="searchResultContainer" style={{ position: 'relative' }}>
          <FaHeart className="heartIcon" onClick={handleFavorite} style={{ position: 'absolute', top: '10px', right: '10px', color: isFavorite ? 'red' : 'grey', cursor: 'pointer' }} />
          <div style={{ marginBottom: '10px', width: '300px', height: '300px' }}>
            <img src={data.anime.image} alt={data.anime.title} style={{ borderRadius: '5px', width: '100%', height: '100%' }} />
          </div>
          <h1 style={{ fontWeight: 'bold', fontSize: '32px' }}>{data.anime.title}</h1>
          <p>{data.anime.description}</p>
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
