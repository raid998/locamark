import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Routes";

import { useAppSelector } from "./store";
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
