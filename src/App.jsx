import "./App.css";
import PokemonCard from "./components/PokemonCard";
import WeatherIcon from "./components/WeatherIcon";
import SayHello from "./components/SayHello";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex +1)
  };
  return (
    <div className="figure">
      <SayHello name="Wilder" name2="compagny" />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <WeatherIcon />
      {pokemonIndex > 0 ? <button onClick={handleClickPrevious}>Previous</button> : null}     
      <br />
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : null}
    </div>
  );
}

export default App;
