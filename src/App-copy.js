import { Link } from 'react-router-dom';
import logo from './Benet.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="navbar">
          <li><Link className="active" to="/">index</Link></li>
          <li><Link className="App-link" to="/App-copy.js" target="_blank" rel="noopener noreferrer">4</Link></li>
          <li><Link to="/page5">5</Link></li>
          <li><Link to="/page6">6</Link></li>
        </ul>
        <p>
          Hola, soc John Caminant
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bottom Text
        </p>
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
          aa aqui para que no te entre un virus
        </a>
      </header>
    </div>
  );
}

export default App;
