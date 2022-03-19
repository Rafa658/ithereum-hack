import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import LoginArea from './components/LoginArea'
import Navbar from './components/Navbar'

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
