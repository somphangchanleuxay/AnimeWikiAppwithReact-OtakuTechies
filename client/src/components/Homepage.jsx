import React from 'react';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Set the minimum height of the container to full viewport height
    }}>
      <div style={{ 
        flex: '1', // Let the content expand to fill the available space
        backgroundImage: 'url(https://wallpapercave.com/wp/crs8YVV.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '20px' // Add padding to create space between content and footer
      }}>
        <div style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '20px', 
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px', 
          margin: '0 auto', 
          marginTop: '20px', // Adjust top margin
          marginBottom: '20px' // Adjust bottom margin
        }}>
          <img src='/images/Otaku-Ani.gif' alt="Anime Image" style={{ maxWidth: '100%', borderRadius: '10px' }} />
          <p style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'yellow', textAlign: 'center' }}>
            You can look up your favorite anime/manga and sign in to blog.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
            <input type="text" placeholder="Search..." style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: 'none', marginBottom: '10px' }} />
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} /> {/* Make the footer stick to the bottom */}
    </div>
  );
};

export default Homepage;
