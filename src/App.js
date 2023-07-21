import Header from './components/Layout/Header';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Services from './pages/Services';
import About from './pages/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/vehicles" element={<Vehicles />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
