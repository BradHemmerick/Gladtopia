import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import DailyChallenge from './components/DailyChallenge';
import './App.css';
import logo from './gladtopia.png'; 


const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'dark' ? '🌞' : '🌜';

  return (
    <div className={`app ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <img src={logo} alt="Gladtopia Logo" className="logo" />
        <h1>Gladtopia</h1>
        <button onClick={toggleTheme} className="theme-toggle-btn">{icon}</button>
      </header>
      <main className="main-content">
        <DailyChallenge />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
