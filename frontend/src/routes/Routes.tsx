import { Routes, Route } from 'react-router-dom'
import Hello from '../components/Hello/Hello'
import Authentification from '../components/Authentification/Authentification'
import Inscription from '../components/Inscription/Inscription'
import ListeAnnonces from '../components/Annonces/ListeAnnonces'

const Router = () => (
  <Routes>
    <Route path="/" element={<Hello />} />
    <Route path="/authentification" element={<Authentification />} />
    <Route path="/inscription" element={<Inscription />} />
    <Route path="/annonces" element={<ListeAnnonces />} />
  </Routes>
)

export default Router