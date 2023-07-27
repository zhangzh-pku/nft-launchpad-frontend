import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/ui/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bid from "./components/Bid";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // TODO theme
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" Component={Bid}/>
            </Routes>
          <Bid />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
