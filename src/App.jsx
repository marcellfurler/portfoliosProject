
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Creativity from "./components/Creativity.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/creativity"
        element={<Creativity />}
      />
    </Routes>
  );
}

export default App;
