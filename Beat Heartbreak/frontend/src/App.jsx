import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// Import components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SelfCareChallenges from './components/SelfCareChallenges';
import HealingPlaylist from './components/HealingPlaylist';
import MoodTracker from './components/MoodTracker';
import DailyAffirmations from './components/DailyAffirmations';
import GratitudeJournal from './components/GratitudeJournal';
import RandomKindness from './components/RandomKindness';
import SupportGroups from './components/SupportGroups';
import TherapistFinder from './components/TherapistFinder';
import QuotesWall from './components/QuotesWall';
import HealingBlog from './components/HealingBlog';
import JournalingPrompts from './components/JournalingPrompts';
import MindfulnessActivities from './components/MindfulnessActivities';
import ProfilePage from './components/ProfilePage';

const App = () => {
  const token = 'your-token'; // Replace this with actual token retrieval logic if needed

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header>
          <h1>Heartbreak Healing Hub</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/self-care-challenges" element={<SelfCareChallenges />} />
            <Route path="/healing-playlist" element={<HealingPlaylist />} />
            <Route path="/mood-tracker" element={<MoodTracker token={token} />} />
            <Route path="/daily-affirmations" element={<DailyAffirmations />} />
            <Route path="/gratitude-journal" element={<GratitudeJournal />} />
            <Route path="/random-kindness" element={<RandomKindness />} />
            <Route path="/support-groups" element={<SupportGroups token={token} />} />
            <Route path="/therapist-finder" element={<TherapistFinder />} />
            <Route path="/quotes-wall" element={<QuotesWall />} />
            <Route path="/healing-blog" element={<HealingBlog />} />
            <Route path="/journaling-prompts" element={<JournalingPrompts />} />
            <Route path="/mindfulness-activities" element={<MindfulnessActivities />} />
            <Route path="/profile" element={<ProfilePage token={token} />} />
          </Routes>
        </main>
        <footer>
          <p>Heartbreak Healing Hub - A place for emotional growth and support</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
