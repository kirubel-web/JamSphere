// App.jsx
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { Global } from "@emotion/react";
import store from "./redux/store";
import theme from "./styles/theme";
import globalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Teaser from "./components/Teaser";
console.log("Global styles:", globalStyles); // debugging line

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={user ? <HomePage /> : <Teaser />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
