import Footer from './Footer';

const Favorites = () => {
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
    
      </div>
      <Footer style={{ width: '100%' }} />
    </div>
  );
};

export default Favorites;