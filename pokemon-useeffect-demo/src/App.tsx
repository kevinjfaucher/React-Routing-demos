import { useState, useEffect } from 'react'
import './App.css'

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';


function App() {
  const [pokemondId, setPokemonId] = useState<number>(1);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetch(`${API_URL}${pokemondId}`)
      .then((response) => response.json())
      .then((data: Pokemon) => {
        setPokemon(data);
      })

      .catch((error) => {
        console.error('Error fetching Pokemon:', error);
      });
  }, [pokemondId]);

  const getRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 151 ) + 1;
    setPokemonId(randomId);
  };

  return (
    <div>
      <h1>Random Pokemon Generator</h1>
      <button onClick={getRandomPokemon}>Get Random Pokemon</button>
      
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )

      }
    </div>
  )

}


export default App
