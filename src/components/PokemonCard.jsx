const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const message = "Hello Everybody !";
  const pokemon = pokemonList[1];
  return (
    <section>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}></img> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
      <p>{message.toUpperCase()}</p>
    </section>
  );
}

export default PokemonCard;
