import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import pokemonList from "./components/PokemonList";

function App() {
  useEffect(
    () => {
      alert("Hello pokemon trainer :)")
    },
    []
  );
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePokemonClick = (index: number) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === 'pikachu') {
      alert('pika pikachu !!!')
    }
  };

  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      <NavBar pokemonTable={pokemonList} onPokemonClick={handlePokemonClick} />
    </div>
  );
}

export default App;