import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
// Example: other pages you might add
// import About from './About'
// import FAQ from './FAQ'
// import Contact from './Contact'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Example routes: */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  )
}
