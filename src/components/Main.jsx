import { useState } from "react";
import { data } from "../mock-data";
import DataList from "./DataList";
import Search from "./Search";

function Main() {
  const [weatherData, setWeatherData] = useState(data);

  return (
    <main className="flex-1 w-1/2 m-auto py-8 px-4">
      <div className="flex flex-col gap-12">
        <h1 className="text-center text-4xl">
          Get current weather data for any location!
        </h1>
        <Search />
        <DataList datapoints={weatherData} />
      </div>
    </main>
  );
}

export default Main;
