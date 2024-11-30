import React from 'react';
import './styles/MindfulnessActivities.css';

const activities = [
  "Take 5 deep breaths and focus on your breathing.",
  "Spend 10 minutes in nature, paying attention to all the sounds around you.",
  "Practice mindful eating – focus on the taste and texture of your food.",
  "Do a body scan to release any tension in your muscles.",
  "Take a break and focus on a simple task (like making a cup of tea) with full presence."
];

const MindfulnessActivities = () => {
  const getRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    alert(activities[randomIndex]);
  };

  return (
    <div>
      <h2>Mindfulness Activities</h2>
      <button onClick={getRandomActivity}>Try a Mindfulness Activity</button>
    </div>
  );
};

export default MindfulnessActivities;
