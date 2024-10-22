interface PokemonCardProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: PokemonCardProps) {
  return (
    <figure key={name}>
      {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
