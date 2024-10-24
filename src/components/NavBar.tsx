interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonTable: Pokemon[];
  onPokemonClick: (index: number) => void;
}

function NavBar({ pokemonTable, onPokemonClick }: NavBarProps) {
  return (
    <>
      {pokemonTable.map((pokemon, index) => (
        <button
        key={pokemon.name}
        type="button"
        onClick={() => onPokemonClick(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
