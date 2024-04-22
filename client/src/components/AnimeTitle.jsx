import React from 'react';

const AnimeTitle = ({ title }) => {
  return (
    <p style={{ marginTop: '20px', fontFamily: 'cursive, sans-serif', fontSize: '24px', color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
      ⭐{title}⭐
    </p>
  );
};

export default AnimeTitle;
