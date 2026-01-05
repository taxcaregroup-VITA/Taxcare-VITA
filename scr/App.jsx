import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
// Placeholder pages
const About = () => <div>About Us Page</div>;
const FAQ = () => <div>FAQ Page</div>;
const Contact = () => <div>Contact Page</div>;
const Privacy = () => <div>Privacy Policy Page</div>;
const GetStarted = () => <div>Get Started Page</div>;
const Schedule = () => <div>Schedule Appointment Page</div>;

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
