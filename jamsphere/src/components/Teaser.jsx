// write normal simple welcome and get started page

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

export default function Teaser() {
  const navigate = useNavigate();

  return (
    <div className="teaser-container">
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
          Join as Guest
        </Link>
      </p>
    </div>
  );
}
