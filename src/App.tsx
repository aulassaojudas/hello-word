import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Aside } from './components/Aside/Aside';
import { Footer } from './components/Footer/Footer';

import { HelloWorld } from './pages/HelloWorldProps';
import { Sobre } from './pages/Sobre';
import { Login } from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { UserProvider } from './contexts/UserContext';
import { IndicadorTable } from './pages/IndicadorTable/IndicadorTable';

function App() {
  return (
    <UserProvider>
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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/indicador" element={<IndicadorTable />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/exit" element={<HelloWorld nome="saiu" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

