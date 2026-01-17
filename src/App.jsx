import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";

// Intake
import IntakeForm from "./components/intake/IntakeForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/intake" element={<IntakeForm />} />
      </Routes>
    </BrowserRouter>
  );
}
