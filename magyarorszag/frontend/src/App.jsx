import Header from "./components/Header";
import Main from "./components/Main";
import Helyisegek from "./components/Helyisegek";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {


  return (
    <div className="mx-10">
      <Header header={"Magyarország helyiségei"} />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/helyisegek" element={<Helyisegek />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
