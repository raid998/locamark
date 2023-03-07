import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./pages/ProtectedRoute";
import Router from "./routes/Routes";
import { Route, Routes } from "react-router";

import Connexion from "./components/Connexion/Connexion";
import Inscription from "./components/Inscription/Inscription";
import { useAppSelector } from "./store";
import ListeAnnonces from "./pages/Annonces/ListeAnnonces";
function App() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="App">
      <NavBar />

      {user ? (
        <SideBar routes={<Router user={user} />} />
      ) : (
        <Router user={user} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
