import Footer from './Footer';

const ServicesPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: 'url(https://wallpapercave.com/wp/crs8YVV.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px'
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
            maxWidth: '600px',
            margin: '0 auto',
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          <h1 style={{ fontFamily: 'Anime Ace', fontSize: '36px', color: 'white', textAlign: 'center' }}>
            Our Services
          </h1>
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
            Welcome to our site! We provide wikis for 10 popular animes, allowing you to find information about these shows all in one place. Share your thoughts and comments with our community in the comment section below each wiki!
          </p>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} />
    </>
  );
};

export default ServicesPage;
