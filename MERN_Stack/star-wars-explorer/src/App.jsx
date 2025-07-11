import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import CharacterDetail from './components/CharacterDetail'
import PlanetDetail from './components/PlanetDetail'
import StarshipDetail from './components/StarshipDetail'
import VehicleDetail from './components/VehicleDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

