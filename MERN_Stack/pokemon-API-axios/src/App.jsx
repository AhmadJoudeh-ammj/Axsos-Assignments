import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  function fetchPokemon() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(function (response) {
        const names = response.data.results.map(function (pokemon) {
          return pokemon.name;
        });
        setPokemonList(names);
      })
      .catch(function (error) {
        console.error('Error fetching Pokémon:', error);
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

      <ul
        style={{
          listStyleType: 'disc',
          textAlign: 'left',
          marginTop: '30px',
          width: '300px',
          margin: '30px auto',
        }}
      >
        {pokemonList.map(function (name, index) {
          return (
            <li key={index} style={{ fontSize: '18px', lineHeight: '1.8' }}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;