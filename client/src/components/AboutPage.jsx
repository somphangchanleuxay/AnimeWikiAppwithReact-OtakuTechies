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
          <h1 style={{ fontFamily: 'Anime Ace', fontSize: '36px', color: 'white', textAlign: 'center' }}>
            About Us
          </h1>
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
            We are a group of new, learning, and growing developers with a shared interest in anime. 
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <img src='https://example.com/melissa.jpg' alt='Melissa' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center' }}>
                Melissa
              </p>
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <img src='https://example.com/david.jpg' alt='David' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center' }}>
                David
              </p>
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <img src='https://i.pinimg.com/originals/72/62/7c/72627cbe125003ce7cedf877e1d7766e.jpg' alt='Kyla' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center' }}>
                Hello! My name is Kyla and I am new at web-design. I really love the art of storytelling, and anime is one of the best mediums for that in my opinion. I love that I am be able to express my love for anime while also demonstrating what my team and I can do. Thank you for visiting our page! I hope you enjoy!
                <br /><br />
                Check out my Github! 😊
                <br />
                <a href="https://github.com/kylaerod" target="_blank" style={{ color: '#8s2be2', textDecoration: 'none', fontWeight: 'bold' }}>
                  https://github.com/kylaerod
                  <style>{`
                  a:hover {
                    color: yellow !important;
                  }
                `}</style>
                </a>
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src='https://example.com/somphang.jpg' alt='Somphang' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center' }}>
                Somphang
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} />
    </>
  );
};

export default AboutPage;
