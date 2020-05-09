import React from 'react';
import CustomAppBar from './components/appBar/appBar';
import './App.css';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <header className="App-header">
        <Router/>
      </header>
    </div>
  );
}

export default App;
