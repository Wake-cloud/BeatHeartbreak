import React, { useState } from 'react';

const prompts = [
  "What is one thing you can do today to feel better?",
  "What have you learned from this experience?",
  "What are you grateful for today?",
  "How did you overcome a difficult moment recently?",
  "Write a letter to your past self."
];

const JournalingPrompts = () => {
  const [randomPrompt, setRandomPrompt] = useState('');

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setRandomPrompt(prompts[randomIndex]);
  };

  return (
    <div>
      <h2>Daily Journaling Prompts</h2>
      <button onClick={generatePrompt}>Get Today's Prompt</button>
      {randomPrompt && <p>{randomPrompt}</p>}
    </div>
  );
};

export default JournalingPrompts;
