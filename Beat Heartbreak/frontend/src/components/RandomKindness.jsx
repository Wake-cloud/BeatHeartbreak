import React, { useState } from 'react';

const RandomKindness = () => {
  const [kindnessIdea, setKindnessIdea] = useState('');

  const kindnessSuggestions = [
    "Send a positive message to a friend",
    "Help a stranger with directions",
    "Pay for someone's coffee",
    "Leave an anonymous note of encouragement",
    "Donate to a charity you care about",
  ];

  const getRandomKindness = () => {
    const randomIndex = Math.floor(Math.random() * kindnessSuggestions.length);
    setKindnessIdea(kindnessSuggestions[randomIndex]);
  };

  return (
    <div>
      <h2>Random Acts of Kindness</h2>
      <button onClick={getRandomKindness}>Get Kindness Idea</button>
      {kindnessIdea && <p>{kindnessIdea}</p>}
    </div>
  );
};

export default RandomKindness;
