import React from 'react';
import YouTube from 'react-youtube';
import './Egitim.css';

const Egitim = () => {
  const videos = [
    'BrrV2RkCsmw',
    'GfP7RkKLAzw',
    'JKtE4bN55w4',
    '0lrfRxc-rp8',
    'A8txWZcSRZ8',
    'lQNC8wXBAJ8'
   
  ];

  return (
    <div className="egitim-container">
      <h2>Meram Belediyesi Tanıtım</h2>
      <div className="egitim-row">
        {videos.map((videoId, index) => (
          <div className="egitim-video" key={index}>
            <YouTube videoId={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Egitim;