import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./styles.css";
import musicNote from "../assets/music-note.png";
import guitar from "../assets/guitar.png";
import drum from "../assets/drum.png";
import piano from "../assets/piano.png";
import sax from "../assets/sax.png";
import radio from "../assets/radio.png";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Teaser() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`teaser-container ${darkMode ? 'dark' : ''}`}>
       <div className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
      {/* Confetti */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
      />

      {/* Floating Images/Emojis */}
      <img src={musicNote} className="floating-image small" style={{ top: '80%', left: '30%' }} alt="note" />
      <img src={guitar} className="floating-image medium" style={{ top: '50%', left: '20%' }} alt="guitar" />
      <img src={drum} className="floating-image large" style={{ top: '20%', left: '10%' }} alt="drum" />
      <img src={piano} className="floating-image small" style={{ top: '10%', left: '70%' }} alt="music emoji" />
      <img src={sax} className="floating-image medium" style={{ top: '30%', left: '80%' }} alt="guitar emoji" />
      <img src={radio}className="floating-image large" style={{ top: '60%', left: '90%' }} alt="drum emoji" />

      {/* Page Content */}
      <div className="teaser-content">
        <h1>Welcome to Jamsphere</h1>
        <p>
          Jamsphere is a web application that allows you to create, share, and
          store your musics and artists.
        </p>
        <p>
          <Link to="/signup" className="teaser-button">
            Get Started
          </Link>
        </p>
        <p>
          <Link to="/login" className="teaser-button">
            Login
          </Link>
          <div className="footer">
        Built by Kirubel. The source code is available on <a href="https://github.com/kirubel-web/JamSphere" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </div>
        </p>
      </div>
    </div>
  );
}
