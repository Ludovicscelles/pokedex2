import "./App.css";
import PokemonCard from "./components/PokemonCard";
import WeatherIcon from "./components/WeatherIcon";
import SayHello from "./components/SayHello";
import { useState } from "react";
import InputMessage from "./components/InputMessage";
import DisplayMessage from "./components/DIsplayMessage";
import NavBar from "./components/NavBar";
import Article from "./components/Article";

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
  const handleClick = (index) => {
    setPokemonIndex(index);
  };

  const [message, setMessage] = useState("");
  const cart = [
    { name: "apple", emoji: "🍏" },
    { name: "banana", emoji: "🍌" },
    { name: "grape", emoji: "🍇" },
    { name: "watermelon", emoji: "🍉" },
  ];

  return (
    <div className="figure">
      <SayHello name="Wilder" name2="compagny" />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <InputMessage setMessage={setMessage} />
      <DisplayMessage message={message} />
      <WeatherIcon />
      <NavBar
        handleClick={handleClick}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
      <h3>shopping list</h3>
      <ul>
        {cart
          .filter((element) => element.name.includes("e"))
          .map((element) => (
            <Article
              key={element.name}
              name={element.name}
              emoji={element.emoji}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
