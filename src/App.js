import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Hello World App
        </p>
        <a
          className="App-link"
          href="https://dashboard.heroku.com/apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Heroku dashboard
        </a>
      </header>
    </div>
  );
}

export default App;
