import React from 'react';
import Footer from './Footer';

const Services = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Set the minimum height of the container to full viewport height
      backgroundImage: 'url(https://wallpapercave.com/wp/crs8YVV.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
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
         This is what we provide lolololololol
    
        </p>
      </div>
      <Footer style={{ marginTop: 'auto', width: '100%' }} /> {/* Make the footer stick to the bottom */}
    </div>
  );
};

export default Services;
