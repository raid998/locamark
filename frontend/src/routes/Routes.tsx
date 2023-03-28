import { Routes, Route } from "react-router-dom";
import AddAnnonce from "../components/Annonce/Add";
import EditAnnonce from "../components/Annonce/Edit";
import ShowAnnonce from "../components/Annonce/Show";
import Connexion from "../components/Connexion/Connexion";
import Inscription from "../components/Inscription/Inscription";
import EditProfil from "../components/Profil/EditProfil";
import ListeAnnonces from "../pages/Annonces/ListeAnnonces";
import MesAnnonces from "../pages/MesAnnonces/MesAnnonces";
import ProtectedRoute from "../pages/ProtectedRoute";
import { UserState } from "../types";

const Router = ({ user }: { user: UserState["user"] }) => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute user={user}>
          <ListeAnnonces />
        </ProtectedRoute>
      }
    />
    <Route path="/connexion" element={<Connexion />} />
    <Route path="/inscription" element={<Inscription />} />
    <Route
      path="/mon-profil/:id/modifier"
      element={
        <ProtectedRoute user={user}>
          <EditProfil />
        </ProtectedRoute>
      }
    />
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
          <AddAnnonce />
        </ProtectedRoute>
      }
    />
    <Route
      path="/annonces/:id"
      element={
        <ProtectedRoute user={user}>
          <ShowAnnonce />
        </ProtectedRoute>
      }
    />
    <Route
      path="/annonces/:id/modifier"
      element={
        <ProtectedRoute user={user}>
          <EditAnnonce />
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
