import '../src/assets/scss/style.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SavoirShow from './pages/SavoirShow';
import CgShow from './pages/CgShow';
import PartShow from './pages/PartShow';
import ContactShow from './pages/ContactShow';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/savoir" element={<SavoirShow />}/>
          <Route path="/cg" element={<CgShow />}/>
          <Route path="/partenaires" element={<PartShow />}/>
          <Route path="/contact" element={<ContactShow />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
