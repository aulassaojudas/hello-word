import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Aside } from './components/Aside/Aside';
import { HelloWorld } from './components/pages/HelloWorldProps';
import { Footer } from './components/Footer/Footer';

import { Sobre } from './components/pages/Sobre';
import { Login } from './components/pages/Login';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Nav />
        <Aside />
        <main className="main">
          <Routes>
            <Route path="/" element={<HelloWorld nome="Carmino" />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

