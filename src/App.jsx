import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import GetStarted from "./pages/GetStarted";
import Schedule from "./pages/Schedule";
import Review from "./pages/Review";
import Documents from "./pages/Documents";
import Rights from "./pages/Rights";
import IntakeForm from "./components/intake/IntakeForm";

// One router for the whole site (main.jsx must not add another),
// with the shared header/footer Layout around every page.
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/intake" element={<IntakeForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/review" element={<Review />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/rights" element={<Rights />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
