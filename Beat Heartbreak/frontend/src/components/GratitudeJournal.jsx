import React, { useState } from 'react';
import './styles/GratitudeJournal.css';

const GratitudeJournal = () => {
  const [gratitudeList, setGratitudeList] = useState([]);
  const [gratitude, setGratitude] = useState('');

  const handleAddGratitude = () => {
    if (gratitude) {
      setGratitudeList([...gratitudeList, gratitude]);
      setGratitude('');
    }
  };

  return (
    <div>
      <h2>Gratitude Journal</h2>
      <input
        type="text"
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
        placeholder="What are you grateful for today?"
      />
      <button onClick={handleAddGratitude}>Add</button>

      <h3>Your Gratitudes:</h3>
      <ul>
        {gratitudeList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GratitudeJournal;
