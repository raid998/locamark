import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <ToastContainer />
    </div>
  );
}

export default App;
