import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Nav from './components/Nav';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <header>
        <h1>Coronavirus Cases</h1>
      </header>
      <Counter />
    </React.Fragment>
  );
}

export default App;
