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
          <h1 style={{ fontFamily: 'Anime Ace', fontSize: '60px', color: 'white', textAlign: 'center' }}>
            About Us
          </h1>
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
            We are a group of new, learning, and growing developers with a shared interest in anime. 
          </p>

          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Melissa
            </p>
            <img src='https://i.pinimg.com/originals/f0/77/6e/f0776eef87435558db02f183e9edf2c2.jpg' alt='Melissa' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Description <br /><br />
              Check out my Github! 🌸
              <br />
              <a href="https://github.com/mbrown50" target="_blank" style={{ color: 'Purple', textDecoration: 'none', fontWeight: 'bold' }}>
                mbrown50
                <style>{`
                  a:hover {
                    color: yellow !important;
                  }
                `}</style>
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              David
            </p>
            <img src='https://i.pinimg.com/originals/2d/4b/10/2d4b10e096307b4c244ae7f57af3e755.jpg' alt='David' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Description <br /><br />
              Check out my Github! 🤖
              <br />
              <a href="https://github.com/CallBeyond" target="_blank" style={{ color: 'Purple', textDecoration: 'none', fontWeight: 'bold' }}>
                CallBeyond
                <style>{`
                  a:hover {
                    color: yellow !important;
                  }
                `}</style>
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Kyla
            </p>
            <img src='https://i.pinimg.com/originals/e8/9b/b9/e89bb998ffeea0e3ac5b72386261e5f8.jpg' alt='Kyla' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Hello! My name is Kyla and I am new at web-design. I really love the art of storytelling, and anime is one of the best mediums for that in my opinion.
               I love that I am be able to express my love for anime while also demonstrating what my team and I can do. Thank you for visiting our page! I hope you enjoy!
              <br /><br />
              Check out my Github! 🥳
              <br />
              <a href="https://github.com/kylaerod" target="_blank" style={{ color: 'purple', textDecoration: 'none', fontWeight: 'bold' }}>
                kylaerod
                <style>{`
                  a:hover {
                    color: yellow !important;
                  }
                `}</style>
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Pang
            </p>
            <img src='https://i.pinimg.com/originals/d4/8a/70/d48a708798e36fcbab438b5b11de0ec1.jpg' alt='Pang' style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} />
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'white', textAlign: 'center', margin: '10px 0', padding: '10px' }}>
              Description <br /><br />
              Check out my Github! 👾
              <br />
              <a href="https://github.com/somphangchanleuxay" target="_blank" style={{ color: 'Purple', textDecoration: 'none', fontWeight: 'bold' }}>
                somphangchanleuxay
                <style>{`
                  a:hover {
                    color: yellow !important;
                  }
                `}</style>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} />
    </>
  );
};

export default AboutPage;
