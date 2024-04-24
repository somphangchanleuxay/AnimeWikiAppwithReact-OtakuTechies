import { useState } from 'react';
import { gql, useQuery, useMutation} from '@apollo/client';
import { useParams } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import Autosuggest from 'react-autosuggest';
import loadingGif from './LoadingGIF.webp';
import errorGif from './ErrorGIF.gif';
import { QUERY_ME } from '../utils/queries';
import '../css/Button.css';
import { FAV_ADD, FAV_REMOVE } from '../utils/mutations';


import AuthService from '../utils/auth';

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
  const {data:meData} = useQuery(QUERY_ME, {
    variables: { title: queryTitle },
  });

  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { title: queryTitle },
  });

  const [favAdd] = useMutation(FAV_ADD);
  const [removeFavorite] = useMutation(FAV_REMOVE);

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setQueryTitle(searchTitle);
    setIsFavorite(meData.me.favorites.includes(searchTitle))
    setSearched(true); // Set searched to true when search button is pressed
  };

  
  const handleFavorite = async () => {
    if (!AuthService.loggedIn()) {
      // Handle case where user is not logged in
      console.error("User must be logged in to toggle favorites.");
      return; // Optionally, prompt the user to log in
    }
  
    const userId = AuthService.getUserId(); // Use the correct function to get the user ID
    if (!userId) {
      console.error("No user ID found, unable to modify favorites.");
      return;
    }
  
    try {
      const variables = { title: data.anime.title };
      setIsFavorite(!isFavorite)
      if (isFavorite) {
        await removeFavorite({ variables });
      } else {
        await favAdd({ variables });
      }
      setIsFavorite(!isFavorite); // Toggle favorite status optimistically
    } catch (error) {
      console.error('Error toggling favorite:', error);
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
