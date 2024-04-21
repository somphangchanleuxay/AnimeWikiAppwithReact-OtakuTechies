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
            You can look up your favorite anime/manga and sign in to blog.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <input type="text" placeholder="Search..." style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '10px' }} />
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
          </div>
        </div>
        <div class="anime-results">
          <div>
          <h1>Results:</h1>
          <animeSearch />
          </div>
          {/* TODO - style for show all or comment out */}
          <div>
            <h1>Anime List</h1>
            <AnimeList />
          </div>
        </div>
      </div>
      <Footer style={{ width: '100%' }} />
    </div>
  );
};

export default Homepage;