import Footer from './Footer';
import AnimeList from './AnimeList';
import AnimeSearch from './AnimeSearch';

const Homepage = () => {
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
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          marginTop: '20px',
          marginBottom: '20px'
        }}>
          <img src='/images/Otaku-Ani.gif' alt="Anime Image" style={{ maxWidth: '100%', borderRadius: '10px' }} />
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
            You can look up your favorite anime/manga and sign in to save it to your favorites. Enter exactly as shown without the stars.
          </p>
     
        </div>
        <div>
          <div>
          <AnimeSearch />
          </div>
          {/* TODO - style for show all or comment out */}
        </div>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
            Type in one of the animes below to see a description of the show!
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐My Hero Academia⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐Attack on Titan⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐My Hero Academia⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐SPY x FAMILY⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐Death Note⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐Solo Leveling⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐One Piece⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐Hunter x Hunter (2011)⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐One-Punch Man⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐Tokyo Ghoul⭐
          </p>
          <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
          ⭐Chainsaw Man⭐
          </p>
          </div>
      </div>
      <Footer style={{ width: '100%' }} />
    </div>
  );
};

export default Homepage;