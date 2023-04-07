import logo from './logo2.png';
import './App.css';
import { Home } from './component/Home';
import data from '../data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>datajson{data.message}
          Automation Testing with React
        </p>
        <a
          className="App-link"
          href="https://github.com/itsmanibharathi"
          target="_blank"
          rel="noopener noreferrer"
        > By itsmanibharathi gitserver
        </a>
      </header>
      <Home />
    </div>
  );
}

export default App;
