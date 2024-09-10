// Teaser.js
import React, { useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { ThemeContext } from "./ThemeContext.jsx"; // Import ThemeContext
import { FaSun, FaMoon } from "react-icons/fa";
import gsap from "gsap";
import musicNote from "../assets/music-note.png";
import guitar from "../assets/guitar.png";
import drum from "../assets/drum.png";
import piano from "../assets/piano.png";
import sax from "../assets/sax.png";
import radio from "../assets/radio.png";

export default function Teaser() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function
  const headingRef = useRef(null);
  const getStartedRef = useRef(null);
  const loginRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
    );

    tl.fromTo(
      getStartedRef.current,
      { scale: 0.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      "+=1",
    );

    tl.fromTo(
      loginRef.current,
      { scale: 0.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5",
    );
  }, []);

  return (
    <div className={`teaser-container ${theme}`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon style={{ color: "grey" }} />}
      </div>

      {/* Confetti */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        recycle={false}
      />
      {/* Floating Images/Emojis */}
      <img
        src={musicNote}
        className="floating-image small"
        style={{ top: "80%", left: "30%" }}
        alt="note"
      />
      <img
        src={guitar}
        className="floating-image medium"
        style={{ top: "50%", left: "20%" }}
        alt="guitar"
      />
      <img
        src={drum}
        className="floating-image large"
        style={{ top: "20%", left: "10%" }}
        alt="drum"
      />
      <img
        src={piano}
        className="floating-image small"
        style={{ top: "10%", left: "70%" }}
        alt="music emoji"
      />
      <img
        src={sax}
        className="floating-image medium"
        style={{ top: "30%", left: "80%" }}
        alt="guitar emoji"
      />
      <img
        src={radio}
        className="floating-image large"
        style={{ top: "60%", left: "90%" }}
        alt="drum emoji"
      />

      {/* Page Content */}
      <div className="teaser-content">
        <h1 ref={headingRef}>Welcome to Jamsphere</h1>
        <p>
          Jamsphere is a web application that allows you to create, share, and
          store your musics and artists.
        </p>
        <p>
          <Link to="/signup" className="teaser-button" ref={getStartedRef}>
            Get Started
          </Link>
        </p>
        <p>
          <Link to="/login" className="teaser-button" ref={loginRef}>
            Login
          </Link>
        </p>
        <div className="footer">
          Built by <strong>Kirubel</strong>. The source code is available on{" "}
          <a
            href="https://github.com/kirubel-web/JamSphere"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </div>
  );
}
