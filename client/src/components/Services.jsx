import Footer from './Footer';

const ServicesPage = () => {
  return (
    <>
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
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1066px',
            width: '100%',
            margin: '0 auto',
            marginTop: '20px',
            marginBottom: '40px',
            height: '1500px'
          }}
        >
          <h1 style={{ fontFamily: 'Anime Ace', fontSize: '50px', color: 'white', textAlign: 'center' }}>
            Our Services
          </h1>
          <div style={{ maxWidth: '600px', width: '100%', marginTop: '-170px' }}>
            <img src="https://i.pinimg.com/originals/5a/ad/c5/5aadc5906a6e05cf6848b2f3e4b12b16.jpg" alt="soloLevelingBanner" style={{ transform: 'rotate(90deg)' }} />
          </div>
          <div style={{ maxWidth: '600px', width: '100%', marginTop: '-90px' }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
              Welcome to Otaku-Ani, your go-to destination for anime and manga enthusiasts! At Otaku-Ani, users can explore, discover, and engage with a curated selection of the top 10 anime and manga titles. Our intuitive interface and comprehensive database provide easy access to detailed information, trailers, and user reviews for each of these handpicked favorites.
              Whether you're a seasoned fan or new to the world of anime and manga, Otaku-Ani offers a tailored experience for everyone. Join our vibrant community, create your personalized watchlist, and start your journey through the exciting world of anime and manga today! 
            </p>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} />
    </>
  );
};

export default ServicesPage;
