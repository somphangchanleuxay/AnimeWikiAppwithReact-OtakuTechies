import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

const GET_ANIME = gql`
  query Query {
    anime (title: $title) {
     _id
      description
      image
      title
    } 
  }
`;

let title = "My Hero Academia";

const AnimeSearch = () => {
  //const { title } = useParams();
  const { loading, error, data } = useQuery(GET_ANIME, {
    variables: { title },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <ul>
      {/*{data.animes.map((anime) => (*/}
        <li key={anime.title}>
          {anime.title} - {anime.description}
          <img src={anime.image} alt={anime.title} />
        </li>
      {/*}))}*/}
    </ul>
  );
};

export default AnimeSearch;