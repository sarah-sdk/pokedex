import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import pokemonList from "./components/PokemonList";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      <NavBar etat="Précédent" action={handleClickPrevious}/>
      <NavBar etat="Suivant" action={handleClickNext}/>
    </div>
  );
}

export default App;
