import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// Placeholder pages
function Home() { return <div className="p-10 text-center">Welcome to Tax Care VITA!</div>; }
function About() { return <div className="p-10 text-center">About Page</div>; }
function FAQ() { return <div className="p-10 text-center">FAQ Page</div>; }
function Contact() { return <div className="p-10 text-center">Contact Page</div>; }
function Privacy() { return <div className="p-10 text-center">Privacy Policy Page</div>; }
function GetStarted() { return <div className="p-10 text-center">Get Started Page</div>; }
function Schedule() { return <div className="p-10 text-center">Schedule Appointment Page</div>; }

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
