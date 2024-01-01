import React from 'react';
import './Videos.css'; // Make sure to create this CSS file

const Videos = () => {
  const videos = [
    {
      id: 'video1',
      title: 'Rumiñahui',
      description: 'Rumiñahui, el líder indígena que resistió la conquista española en el corazón de los Andes.',
      url: 'https://www.youtube.com/embed/2p3it6Obszw?si=8A3E7GEO-OY9KKaJ' // Replace with actual YouTube embed URL
    },
    {
      id: 'video2',
      title: 'La ciudad del sol perfecto',
      description: 'La historia de los Caras y la ciudad del sol perfecto.',
      url: 'https://www.youtube.com/embed/6wxlu0MFGAk?si=moQEfiharhQ91yE3'
    },
    {
      id: 'video3',
      title: 'La independencia de Guayaquil ',
      description: 'los momentos clave de la Independencia de Guayaquil y el comienzo de una nueva era en Ecuador.',
      url: 'https://www.youtube.com/embed/XORZprsoLyM?si=uAs2P7WFYV6ZWO0I'
    },

    {
      id: 'video4',
      title: 'Video Title 2',
      description: 'Entrevista de Ecuavisa a Shunku Studio',
      url: 'https://www.youtube.com/embed/-K2v-0njBqs?si=PV3u13Dz0JlYEO3N'
    
    },

    
  ];

  return (
    <div className="videos-container">
      {videos.map(video => (
        <div key={video.id} className="video">
          <iframe
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Videos;
