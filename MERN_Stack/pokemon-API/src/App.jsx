import { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(data => {
        const names = data.results.map(p => p.name);
        setPokemonList(names);
      })
      .catch(error => {
        console.error('Failed to fetch Pokemon:', error);
      });
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={fetchPokemon}
        style={{
          backgroundColor: '#555',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Fetch Pokemon
      </button>

      <ul style={{ listStyleType: 'disc', textAlign: 'left', marginTop: '40px', width: '300px', margin: '30px auto' }}>
        {pokemonList.map((name, index) => (
          <li key={index} style={{ fontSize: '18px', lineHeight: '1.8' }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;