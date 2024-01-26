import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path='/' element={<Pokemons />} />
          <Route path='/items' element={<Items />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/pokemons/:name' element={<Pokemon />} />
        </Routes>
      </section>

    </div>
  );
}

export default App;
