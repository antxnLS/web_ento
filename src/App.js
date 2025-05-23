import { Routes, Route } from 'react-router-dom';
import logo from './Benet.webp';
import './App.css';
import Navbar from './Navbar';
import Page4 from './page4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p>Hola, soc John Caminant</p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Bottom Text</p>
                <a
                  className="App-link"
                  href="https://caminant.fandom.com/es/wiki/Benet_caminant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clica aqui para que entre un virus
                </a>
                <a
                  className="App-link"
                  href="./pagina.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clica aqui para que no te entre un virus
                </a>
              </>
            }
          />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
