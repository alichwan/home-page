import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Professional from './pages/Professional'
import Personal from './pages/Personal'
// import Projects from './pages/Projects'

function AppLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/personal"     element={<Personal />} />
        {/* <Route path="/projects"     element={<Projects />} /> WIP because I lack of a Wide variety of project to include here */}
      </Routes>
      {pathname !== '/' && <Footer />}
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
