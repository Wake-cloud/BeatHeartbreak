import React from 'react';
import { Link } from 'react-router-dom';
 import './styles/Navbar.css' // Optional: You can style the navbar separately

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Heartbreak Healing Hub</h1>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/self-care-challenges" className="navbar-item">Self-Care Challenges</Link></li>
          <li><Link to="/healing-playlist" className="navbar-item">Healing Playlist</Link></li>
          <li><Link to="/mood-tracker" className="navbar-item">Mood Tracker</Link></li>
          <li><Link to="/daily-affirmations" className="navbar-item">Daily Affirmations</Link></li>
          <li><Link to="/gratitude-journal" className="navbar-item">Gratitude Journal</Link></li>
          <li><Link to="/random-kindness" className="navbar-item">Random Kindness</Link></li>
          <li><Link to="/support-groups" className="navbar-item">Support Groups</Link></li>
          <li><Link to="/therapist-finder" className="navbar-item">Therapist Finder</Link></li>
          <li><Link to="/quotes-wall" className="navbar-item">Quotes Wall</Link></li>
          <li><Link to="/healing-blog" className="navbar-item">Healing Blog</Link></li>
          <li><Link to="/journaling-prompts" className="navbar-item">Journaling Prompts</Link></li>
          <li><Link to="/mindfulness-activities" className="navbar-item">Mindfulness Activities</Link></li>
          <li><Link to="/profile" className="navbar-item">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
