import "./App.css";
import PokemonCard from "./components/PokemonCard";
import WeatherIcon from "./components/WeatherIcon";
import SayHello from "./components/SayHello";

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

function App() {
  return (
    <div className="figure">
      <SayHello name="Wilder" name2="compagny" />
      <PokemonCard pokemon={pokemonList[0]} />
      <WeatherIcon />
    </div>
  );
}

export default App;
