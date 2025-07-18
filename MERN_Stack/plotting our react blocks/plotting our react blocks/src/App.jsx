import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;