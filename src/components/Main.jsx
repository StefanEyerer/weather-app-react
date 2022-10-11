import { useState } from "react";
import { requestWeatherData } from "../utils/request-weather-data";
import DataList from "./DataList";
import Search from "./Search";

function Main() {
  const [weatherData, setWeatherData] = useState([]);

  const handleSubmit = async (location) => {
    const result = await requestWeatherData(location);
    setWeatherData((weatherData) => {
      return [...weatherData, result];
    });
  };

  const handleReset = () => {
    setWeatherData([]);
  };

  return (
    <main className="flex-1 w-1/2 m-auto py-8 px-4">
      <div className="flex flex-col gap-12">
        <h1 className="text-center text-4xl">
          Get current weather data for any location!
        </h1>
        <Search onSubmit={handleSubmit} />
        <DataList datapoints={weatherData} onReset={handleReset} />
      </div>
    </main>
  );
}

export default Main;
