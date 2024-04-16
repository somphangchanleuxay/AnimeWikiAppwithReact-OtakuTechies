import Footer from './Footer.jsx';


const Homepage = () => {
  return (
    <div style={{ 
      backgroundImage: 'url(https://wallpapercave.com/wp/crs8YVV.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '91.6vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px', 
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img src='../../public/images/Otaku-Ani.gif' alt="Anime Image" />
     
        <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow' }}>
          You can look up your favorite anime/manga and sign in to blog.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
          <input type="text" placeholder="Search..." style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '10px' }} />
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
)};

export default Homepage;