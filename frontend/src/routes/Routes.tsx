import { Routes, Route } from 'react-router-dom'
import Hello from '../components/Hello/Hello'
import Authentification from '../components/Authentification/Authentification'
import Inscription from '../components/Inscription/Inscription'

const Router = () => (
  <Routes>
    <Route path="/" element={<Hello />} />
    <Route path="/authentification" element={<Authentification />} />
    <Route path="/inscription" element={<Inscription />} />
  </Routes>
)

export default Router