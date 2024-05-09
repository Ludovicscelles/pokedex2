import PropTypes from "prop-types";

function NavBar({ pokemonList, handleClick }) {
  return (
    <section>
      {pokemonList.map((element, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {element.name}
        </button>
      ))}
    </section>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
