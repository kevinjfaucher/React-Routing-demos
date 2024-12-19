import React from 'react';
import { Link } from 'react-router-dom';
import Router from './routes/Router';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dog">Random Dog Image</Link>
      </nav>

      <Router/>
    </div>
  )
}

export default App
