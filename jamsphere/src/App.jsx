import React, { useContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { Global } from "@emotion/react";
import store from "./redux/store";
import theme from "./styles/theme";
import globalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Teaser from "./components/Teaser";
import { ThemeProvider as CustomThemeProvider } from "./components/ThemeContext";

console.log("Global styles:", globalStyles); // debugging line

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <CustomThemeProvider>
        <Provider store={store}>
          <EmotionThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={user ? <HomePage /> : <Teaser />} />
              </Routes>
            </Router>
          </EmotionThemeProvider>
        </Provider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
