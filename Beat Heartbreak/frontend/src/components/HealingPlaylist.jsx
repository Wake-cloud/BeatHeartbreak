import React from 'react';
import './styles/HealingPlaylist.css';
const HealingPlaylist = () => {
  const playlist = [
    "Someone Like You – Adele",
    "Fix You – Coldplay",
    "Let Her Go – Passenger",
    "The Night We Met – Lord Huron",
    "Tears Dry on Their Own – Amy Winehouse",
  ];

  return (
    <div>
      <h2>Healing Playlist</h2>
      <ul>
        {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
      <p>Take some time to listen to music that comforts you and allows you to reflect.</p>
    </div>
  );
};

export default HealingPlaylist;
