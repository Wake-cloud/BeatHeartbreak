import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuotesWall = () => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');

  useEffect(() => {
    // Example of fetching stored quotes - replace with your API if needed
    axios.get('http://localhost:5000/api/quotes')
      .then(response => setQuotes(response.data))
      .catch(err => console.error(err));
  }, []);

  const handlePostQuote = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/quotes', { text: newQuote });
      setQuotes([response.data, ...quotes]);
      setNewQuote('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Healing Quotes Wall</h2>
      <textarea
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
        placeholder="Share a quote that helps you heal"
      />
      <button onClick={handlePostQuote}>Post Quote</button>

      <h3>Quotes from Others</h3>
      {quotes.map((quote, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <p>"{quote.text}"</p>
          <small>- Anonymous</small>
        </div>
      ))}
    </div>
  );
};

export default QuotesWall;
