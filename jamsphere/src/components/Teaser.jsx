// write normal simple welcome and get started page

import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Teaser() {
  return (
    <div className="teaser-container">
      <h1>Welcome to Jamsphere</h1>
      <p>
        Jamsphere is a web application that allows you to create, share, and
        join live music events.
      </p>
      <Link to="/login" className="teaser-button">
        Get Started
      </Link>

      <p> or </p>

      <Link to="/" className="teaser-button">
        Join as Guest
      </Link>
    </div>
  );
}
