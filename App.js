import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Portal from './Portal.js';
import Anasayfa from './component/Anasayfa.js';
import Duyurular from './component/Duyurular.js';
import Iletisim from './component/Iletisim';
import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import BasvuruGuncelle from "./component/BasvuruGuncelle";
import Password from "./component/Password.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />        
        <Route path="/kayit" element={<Register />} />
        <Route path="/portal/password" element={<Password />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/portal/Anasayfa" element={<Anasayfa />} />
        <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
        <Route path="/portal/BasvuruGuncelle" element={<BasvuruGuncelle/>} />
        <Route path="/portal/Duyurular" element={<Duyurular />} />
        <Route path="/portal/Iletisim" element={<Iletisim />} />
      </Routes>
    </Router>

  );
}

export default App;