import React, { useState } from 'react';

const TherapistFinder = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // This is a mock function. You can use an API like TherapyRoute or similar services to fetch real data
    const mockResults = [
      { name: 'Dr. Smith', specialty: 'Marriage & Family Therapy', location: 'New York, NY' },
      { name: 'Dr. Johnson', specialty: 'Cognitive Behavioral Therapy', location: 'Los Angeles, CA' },
      { name: 'Dr. Lee', specialty: 'Mindfulness-Based Therapy', location: 'Chicago, IL' },
    ];

    // Filter therapists by location
    const filteredResults = mockResults.filter((therapist) =>
      therapist.location.toLowerCase().includes(location.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <h2>Find a Therapist</h2>
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {results.length > 0 ? (
        <ul>
          {results.map((therapist, idx) => (
            <li key={idx}>
              <strong>{therapist.name}</strong> - {therapist.specialty} ({therapist.location})
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found. Try a different location.</p>
      )}
    </div>
  );
};

export default TherapistFinder;
