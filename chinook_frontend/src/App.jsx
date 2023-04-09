import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {


  return (
    <div className="mx-10">
      <Header headerText={"Chinook adatbázis"} />
     
      <Router>
      <Menu />
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/artists" element={<Artists />} />
           <Route path="/albums" element={<Albums />} />
           <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
