import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Example of fetching quotes - replace with your own API or quotes list
    axios.get('https://api.quotable.io/random')
      .then(response => setQuote(response.data.content))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Inspirational Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quotes;
