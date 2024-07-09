import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
