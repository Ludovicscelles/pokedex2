import "./App.css";
import PokemonCard from "./components/PokemonCard";
import WeatherIcon from "./components/WeatherIcon";

function App() {
  return (
    <div className="figure">
      <PokemonCard />
      <WeatherIcon />
    </div>
  );
}

export default App;
