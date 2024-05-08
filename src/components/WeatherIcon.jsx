function WeatherIcon() {
  const weather = "rainy";

  const printIcon = (key) => {
    const weatherMap = {
      sunny: "☀️",
      cloudy: "☁️",
      rainy: "🌧️",
      stormy: "🌩️",

    };
    return weatherMap[key];

  };

  return <p>{printIcon(weather)}</p>;
  
}

export default WeatherIcon;
