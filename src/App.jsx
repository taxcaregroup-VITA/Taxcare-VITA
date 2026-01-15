import Layout from './Layout'
import Home from './Home'
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
