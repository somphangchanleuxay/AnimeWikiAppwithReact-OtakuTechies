
import { gql, useQuery } from '@apollo/client';
import { FaHeart } from 'react-icons/fa';
import Footer from './Footer'; 

const GET_FAVORITES = gql`
  query GetFavorites {
    me {
      _id
      favorites {
        _id
        title
        description
        image
      }
    }
  }
`;

const Favorites = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: "url(https://wallpapercave.com/wp/crs8YVV.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          padding: "20px",
        }}
      >

        <div>
          <h1>Favorite Anime</h1>
          {data.me.favorites.map((anime) => (
            <div key={anime._id} className="favoriteAnimeContainer">
              <div style={{ marginBottom: '10px', width: '300px', height: '300px' }}>
                <img src={anime.image} alt={anime.title} style={{ borderRadius: '5px', width: '100%', height: '100%' }} />
              </div>
              <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{anime.title}</h2>
              <p>{anime.description}</p>
              <FaHeart style={{ color: 'red' }} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
