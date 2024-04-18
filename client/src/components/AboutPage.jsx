import Footer from './Footer';

const AboutPage = () => {
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
          <img src='/images/Otaku-Ani.gif' alt="Anime Image" style={{ maxWidth: '100%', borderRadius: '10px' }} />
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
            This page is about us! here are our githubs:
            Melissa
            David
            Kyla
            Somphang
          </p>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} />
    </>
  );
};

export default AboutPage;