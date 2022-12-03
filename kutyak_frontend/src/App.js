import Kutyafajtak from "./components/Kutyafajtak";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Fooldal from "./components/Fooldal";
import KutyafajtaForm from "./components/KutyafajtaForm";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/kutyafajtak" element={<Kutyafajtak />} />
          <Route path="/ujkutyafajta" element={<KutyafajtaForm />} />

        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
