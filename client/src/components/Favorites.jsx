import { gql, useQuery } from "@apollo/client";
import Footer from "./Footer";

const GET_FAVORITES = gql`
  query GetFavorites {
    me {
      _id
      username
      email
      favorites
    }
  }
`;

const Favorites = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
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
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "50px",
              color: "white",
              fontFamily: "Unica One, Arial",
              textDecoration: "underline",
            }}
          >
            Favorited Animes
          </h1>

          {data.me.favorites.map((anime, index) => (
            <div key={index} className="favoriteAnimeContainer">
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "red",
                  fontFamily: "Unica One; Arial",
                }}
              >
                {anime}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
