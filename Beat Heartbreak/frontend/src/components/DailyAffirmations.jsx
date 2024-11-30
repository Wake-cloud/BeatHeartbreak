import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DailyAffirmations = () => {
  const [affirmation, setAffirmation] = useState('');

  useEffect(() => {
    // Example of fetching daily affirmation - replace with your API or data
    axios.get('https://api.affirmations.dev')
      .then(response => setAffirmation(response.data.affirmation))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Daily Affirmation</h2>
      <p>{affirmation}</p>
    </div>
  );
};

export default DailyAffirmations;
