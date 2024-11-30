import React, { useState } from 'react';
import './styles/SelfCareChallenges.css';
const SelfCareChallenges = () => {
  const [completedChallenges, setCompletedChallenges] = useState([]);

  const challenges = [
    "Take a 10-minute walk",
    "Write down 3 things you're grateful for",
    "Practice deep breathing for 5 minutes",
    "Reach out to a friend or family member",
    "Do something creative (draw, write, etc.)"
  ];

  const handleChallengeComplete = (challenge) => {
    if (!completedChallenges.includes(challenge)) {
      setCompletedChallenges([...completedChallenges, challenge]);
    }
  };

  return (
    <div>
      <h2>Self-Care Challenges</h2>
      <ul>
        {challenges.map((challenge, idx) => (
          <li key={idx} style={{ textDecoration: completedChallenges.includes(challenge) ? 'line-through' : '' }}>
            {challenge}
            <button onClick={() => handleChallengeComplete(challenge)}>Complete</button>
          </li>
        ))}
      </ul>
      {completedChallenges.length === challenges.length && <p>Great job! You've completed all challenges.</p>}
    </div>
  );
};

export default SelfCareChallenges;
