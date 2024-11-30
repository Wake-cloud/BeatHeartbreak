import React, { useState } from 'react';
import axios from 'axios';
import './styles/MoodTracker.css';
const MoodTracker = ({ token }) => {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/mood-tracker',
        { mood, notes },
        { headers: { 'x-auth-token': token } }
      );
      alert('Mood entry saved successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Track Your Mood</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mood:
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Select your mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="neutral">Neutral</option>
            <option value="anxious">Anxious</option>
          </select>
        </label>
        <br />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any additional thoughts..."
        />
        <br />
        <button type="submit">Save Mood</button>
      </form>
    </div>
  );
};

export default MoodTracker;
