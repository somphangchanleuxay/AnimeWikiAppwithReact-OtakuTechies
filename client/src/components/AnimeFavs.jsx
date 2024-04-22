import { gql, useQuery } from '@apollo/client';
import AnimeOne from './AnimeOne';

const someone = "Brian Kernighan";

const GET_FAVS = gql`
  query Query($username: String!) {
    user(username: $username) {
      _id
      email
      favorites
      password
      username
    }
  }
`

const AnimeFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVS,
    { variables: { username: someone } }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <ul>
    {data.user.favorites.map((fav) => (
     <li key={fav}> 
       <AnimeOne animeName = {fav} />
     </li>
    ))}
    </ul>
  )
};

export default AnimeFavs;


