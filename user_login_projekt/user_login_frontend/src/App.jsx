import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Useradat from "./components/Useradat";
import Upload from "./components/Upload";
import { UserProvider } from "./components/context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {

  return (
    <div className="mx-10">
      <Header headerText={"React app"} />
      <UserProvider>
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/useradat" element={<Useradat />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
      </UserProvider>

      <ToastContainer />
      
      
    </div>
  )
}

export default App
