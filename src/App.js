import logo from './Benet.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul class="navbar">
          <li><a class="active" href="App.js">index</a></li>
          <li><a href="index.html">4</a></li>
          <li><a href="">5</a></li>
          <li><a href="">6</a></li>
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
          Clica aqui para que no te entre un virus
        </a>
      </header>
    </div>
  );
}

export default App;
