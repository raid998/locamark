import { Routes, Route } from "react-router-dom";
import Annonce from "../components/Annonce/Annonce";
import Connexion from "../components/Connexion/Connexion";
import Inscription from "../components/Inscription/Inscription";
import ListeAnnonces from "../pages/Annonces/ListeAnnonces";
const Router = () => (
  <Routes>
    <Route path="/annonces/ajouter" element={<Annonce />} />
    <Route path="/connexion" element={<Connexion />} />
    <Route path="/inscription" element={<Inscription />} />
    <Route path="/annonces" element={<ListeAnnonces />} />
  </Routes>
);

export default Router;
