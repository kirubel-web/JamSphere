import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaHome } from "react-icons/fa";
import "./styles.css";
import Button from "./Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://jamsphere-backend.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, password }),
        },
      );

      const data = await response.json();
      if (response.ok) {
        // Redirect to login after successful signup
        signup(data);
        navigate("/");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleSocialSignUp = (provider) => {
    // Implement social sign up logic here
    console.log(`Sign up with ${provider}`);
  };

  return (
    <>
      <div className="Home">
        <Button
          gradient
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <FaHome style={{ color: "white", fontSize: "24px" }} />
        </Button>
      </div>
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="username">Username</label>
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
            Sign Up
          </Button>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="divider">
          <span>or</span>
        </div>
        <div className="social-login">
          <button
            className="social-btn"
            onClick={() => handleSocialSignUp("Google")}
            style={{ margin: "0 20px", padding: "10px 40px" }}
          >
            <FaGoogle style={{ color: "red", fontSize: "24px" }} />
          </button>
          <button
            className="social-btn"
            onClick={() => handleSocialSignUp("Facebook")}
            style={{ margin: "0 20px", padding: "10px 40px" }}
          >
            <FaFacebook style={{ color: "blue", fontSize: "24px" }} />
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </>
  );
}
