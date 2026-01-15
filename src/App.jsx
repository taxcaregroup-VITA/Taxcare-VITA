import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';
import Privacy from './Privacy';
import GetStarted from './GetStarted';
import Schedule from './Schedule';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Layout>
  );
}
