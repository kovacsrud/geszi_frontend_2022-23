import Kutyafajtak from "./components/Kutyafajtak";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Fooldal from "./components/Fooldal";
import KutyafajtaForm from "./components/KutyafajtaForm";
import {KutyaProvider} from './context/KutyaContext';
import KutyaLista from "./components/kutyak/KutyaLista";
import KutyaForm from "./components/kutyak/KutyaForm";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <KutyaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/kutyafajtak" element={<Kutyafajtak />} />
          <Route path="/ujkutyafajta" element={<KutyafajtaForm />} />
          <Route path="/kutyak" element={<KutyaLista />} />
          <Route path="/ujkutya" element={<KutyaForm />} />

        </Routes>
      </Router>
      </KutyaProvider>
      
     
    </div>
  );
}

export default App;
