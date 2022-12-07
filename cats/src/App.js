
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Fooldal from './components/Fooldal';
import Fact from './components/Fact';
import Facts from './components/Facts';
import Breeds from './components/Breeds';


function App() {
  return (
    <div className="container">
      <h1>Cat facts</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Fooldal />} />
          <Route path='/fact' element={<Fact />} />
          <Route path='/facts' element={<Facts />} />
          <Route path='/breeds' element={<Breeds />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
