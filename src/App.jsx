import Layout from './Layout'
import Home from './Home'
import Home from './GetStarted'
import Home from './Schedule'
import Home from './FAQ'
import Home from './About'
import Home from './Privacy'
import Home from './Contact'
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
