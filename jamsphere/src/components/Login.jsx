import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import "./styles.css";
import Button from "./Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://jamsphere-backend.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        login(data);
        console.log("Successful login"); // Debugging message
        navigate("/");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="login-container">
      <h2 justify="center">Sign In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="password">Password</label>
        </div>
        <Button gradient type="submit">
          Sign In
        </Button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="divider">
        <span>or</span>
      </div>
      <div className="social-login">
        <button
          className="social-btn"
          onClick={() => handleSocialLogin("Google")}
          style={{ margin: '0 20px', padding: '10px 40px' }}
        >
          <FaGoogle style={{ color: 'red', fontSize: '24px'}}/>

        </button>
        <button
          className="social-btn"
          onClick={() => handleSocialLogin("Facebook")}
          style={{ margin: '0px 20px', padding: '0px 40px' }}
        >
          <FaFacebook style={{ color: 'blue', fontSize: '24px'}}/>

        </button>
      </div>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
