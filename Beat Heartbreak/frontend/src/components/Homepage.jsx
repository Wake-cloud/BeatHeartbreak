import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Homepage.css';// Add this for styling the homepage if needed

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Heartbreak Healing Hub</h1>
        <p>Your safe space to heal, grow, and rediscover yourself.</p>
      </header>
      <section className="homepage-intro">
        <p>
          Heartbreak is hard, but you don’t have to go through it alone. Our platform offers tools, resources, and a supportive community to help you navigate through this tough time.
        </p>
        <p>Take a step forward today and explore the features designed to support your emotional well-being:</p>
      </section>
      <section className="homepage-features">
        <div className="feature-card">
          <h3>Self-Care Challenges</h3>
          <p>Try small, meaningful tasks to prioritize your well-being.</p>
          <Link to="/self-care-challenges" className="feature-link">Explore Challenges</Link>
        </div>
        <div className="feature-card">
          <h3>Healing Playlist</h3>
          <p>Music to comfort and inspire you on your healing journey.</p>
          <Link to="/healing-playlist" className="feature-link">Listen Now</Link>
        </div>
        <div className="feature-card">
          <h3>Mood Tracker</h3>
          <p>Track your emotions and observe patterns in your feelings.</p>
          <Link to="/mood-tracker" className="feature-link">Track Your Mood</Link>
        </div>
        <div className="feature-card">
          <h3>Gratitude Journal</h3>
          <p>Focus on the positives by writing what you're grateful for.</p>
          <Link to="/gratitude-journal" className="feature-link">Start Journaling</Link>
        </div>
        <div className="feature-card">
          <h3>Support Groups</h3>
          <p>Connect with others who understand what you’re going through.</p>
          <Link to="/support-groups" className="feature-link">Find Support</Link>
        </div>
        <div className="feature-card">
          <h3>Daily Affirmations</h3>
          <p>Build confidence and positivity with daily affirmations.</p>
          <Link to="/daily-affirmations" className="feature-link">Get Affirmations</Link>
        </div>
      </section>
      <footer className="homepage-footer">
        <p>Take the first step toward healing. You’re stronger than you know!</p>
        <p>© 2024 Heartbreak Healing Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
