import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Journal = ({ token }) => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [entryText, setEntryText] = useState('');

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/journal/entries', {
          headers: { 'x-auth-token': token },
        });
        setJournalEntries(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEntries();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/journal/entry',
        { entryText },
        { headers: { 'x-auth-token': token } }
      );
      setEntryText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Your Journal</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Write your thoughts here..."
        />
        <button type="submit">Save Entry</button>
      </form>
      <div>
        <h3>Previous Entries</h3>
        {journalEntries.map((entry, idx) => (
          <div key={idx}>
            <p>{entry.text}</p>
            <small>{new Date(entry.date).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
