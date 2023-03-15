import { Routes, Route } from "react-router-dom";
import Annonce from "../components/Annonce/Annonce";
import Connexion from "../components/Connexion/Connexion";
import Inscription from "../components/Inscription/Inscription";
import ListeAnnonces from "../pages/Annonces/ListeAnnonces";
import MesAnnonces from "../pages/MesAnnonces/ListeAnnonces";
import ProtectedRoute from "../pages/ProtectedRoute";
import { UserState } from "../types";

const Router = ({ user }: { user: UserState["user"] }) => (
  <Routes>
    <Route path="/connexion" element={<Connexion />} />
    <Route path="/inscription" element={<Inscription />} />
    <Route
      path="/annonces"
      element={
        <ProtectedRoute user={user}>
          <ListeAnnonces />
        </ProtectedRoute>
      }
    />
    <Route
      path="/annonces/ajouter"
      element={
        <ProtectedRoute user={user}>
          <Annonce />
        </ProtectedRoute>
      }
    />
    <Route
      path="/mes-annonces"
      element={
        <ProtectedRoute user={user}>
          <MesAnnonces />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default Router;
