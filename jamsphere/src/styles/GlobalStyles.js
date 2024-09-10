import { css } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  /* Basic Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body Styles */
  body {
    font-family: "Poppins", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(to right, #f4f4f4, #f1f1f1);
    color: #333; /* Dark text for contrast */
    line-height: 1.6;
    padding: 0;
    margin: 0;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  input {
    background-color: #f7f7f7;
    color: #111;
  }

  /* Code Block Styles */
  code {
    font-family: "Poppins", sans-serif;
    background-color: #f4f4f4; /* Light background for code blocks */
    border-radius: 4px;
    padding: 0.2rem 0.4rem;
    color: #d63384; /* Color that stands out */
  }

  /* Anchor Tag Styles */
  a {
    color: #007bff; /* Link color */
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #0056b3; /* Darker link color on hover */
    text-decoration: underline;
  }

  /* Button Styles */
  button {
    background-color: #007bff; /* Button color */
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 16px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  button:hover {
    background-color: #0056b3; /* Darker button color on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

export default globalStyles;
