import './App.css';
import { Router, Route, Routes, Link } from 'react-router-dom';
import LoginArea from './components/LoginArea';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';

function App() {
  return (
      <div className="App">
        <body>
            <Navbar />
            <LoginArea />
        </body>
      </div>
  );
}

export default App;
