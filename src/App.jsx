import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Landing from "./views/Landing";
import Home from "./views/Home";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
