import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import IntakeForm from "./components/intake/IntakeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<IntakeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
