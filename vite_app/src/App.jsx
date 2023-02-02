import Main from "./components/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Letter from "./components/Letter";
import Name from "./components/Name";
import Ingredient from "./components/Ingredient";

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {
 

  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/name" element={<Name />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
