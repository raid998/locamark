import {Routes, Route} from 'react-router-dom'
import Annonce from '../components/Annonce/Annonce'
import Authentification from '../components/Authentification/Authentification'
import Inscription from '../components/Inscription/Inscription'
const Router =   () => (

  <Routes>
    <Route path="/annonces/ajouter" element={<Annonce/>} />
    <Route path="/authentification" element={<Authentification />} />
    <Route path="/inscription" element={<Inscription />} />
  </Routes>
)

export default Router