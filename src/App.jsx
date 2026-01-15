import Layout from './Layout'
import Home from './Home'
import GetStarted from './GetStarted'
import Schedule from './Schedule'
import FAQ from './FAQ'
import About from './About'
import Privacy from './Privacy'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}
