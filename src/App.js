import logo from './logo2.png';
import './App.css';
import { Home } from './component/Home';
// import {Data} from './data';
const Data=require('./data.json')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>datajson {Data.message}
          Automation Testing with React
        </p>
        <a
          className="App-link"
          href="https://github.com/itsmanibharathi"
          target="_blank"
          rel="noopener noreferrer"
        > By itsmanibharathi 
        </a>
      </header>
      <Home />
    </div>
  );
}

export default App;
