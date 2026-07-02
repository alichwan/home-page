import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Professional from './pages/Professional'
import Personal from './pages/Personal'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/personal"     element={<Personal />} />
        <Route path="/projects"     element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
