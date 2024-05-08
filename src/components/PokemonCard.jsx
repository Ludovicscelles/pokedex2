function PokemonCard({pokemon}) {
  const message = "Hello Everybody !";
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
