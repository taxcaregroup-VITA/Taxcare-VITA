import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (note the correct path)
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";

// Intake form
import IntakeForm from "./components/intake/IntakeForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/intake" element={<IntakeForm />} />
      </Routes>
    </Router>
  );
}
