import {Routes, Route} from 'react-router-dom'
import Annonce from '../components/Annonce/Annonce'
const Router =   () => (
  <Routes>
    <Route path="/annonces/ajouter" element={<Annonce/>} />
    
  </Routes>
)

export default Router