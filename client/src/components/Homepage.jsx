// Homepage.js
import React from 'react';
import Footer from './Footer';
import AnimeSearch from './AnimeSearch';
import AnimeTitle from './AnimeTitle';

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
        </div>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
            Animes Currently Available
          </p>
          <AnimeTitle title="My Hero Academia" />
          <AnimeTitle title="Attack on Titan" />
          <AnimeTitle title="SPY x FAMILY" />
          <AnimeTitle title="Death Note" />
          <AnimeTitle title="Solo Leveling" />
          <AnimeTitle title="One Piece" />
          <AnimeTitle title="Hunter x Hunter" />
          <AnimeTitle title="One-Punch Man" />
          <AnimeTitle title="Tokyo Ghoul" />
          <AnimeTitle title="Chainsaw Man" />
        </div>
      </div>
      <Footer style={{ width: '100%' }} />
    </div>
  );
};

export default Homepage;
