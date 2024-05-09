import PropTypes from "prop-types";

function NavBar({handleClickPrevious, handleClickNext, pokemonIndex, pokemonList}) {
    
    return(
    <section>
    {pokemonIndex > 0 ? (
        <button onClick={handleClickPrevious}>Previous</button>
      ) : null}
      <br />
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Next</button>
      ) : null}
   </section>
      );
}

NavBar.propTypes = {
    handleClickPrevious: PropTypes.func.isRequired,
    handleClickNext: PropTypes.func.isRequired,
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
};


export default NavBar;
