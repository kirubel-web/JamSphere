// App.jsx
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { Global } from "@emotion/react";
import store from "./redux/store";
import theme from "./styles/theme";
import globalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";

console.log("Global styles:", globalStyles);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <HomePage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;