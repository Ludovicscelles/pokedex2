import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const message = "Hello Everybody !";
  return (
    <section>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name}></img>
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
      <p>{message.toUpperCase()}</p>
    </section>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
