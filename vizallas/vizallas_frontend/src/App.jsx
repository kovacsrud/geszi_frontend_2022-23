import Header from "./components/Header"
import Main from "./components/Main"
import Igazgatosag from "./components/Igazgatosag"
import Keszultseg from "./components/Keszultseg"

import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

function App() {


  return (
    <div className="mx-10">
      <Header headerText={"Vízállás Portál"} />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/igazgatosag" element={<Igazgatosag />} />
          <Route path="/keszultseg" element={<Keszultseg />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
