const BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "<ADD_API_KEY_HERE>";

export const requestWeatherData = async (location) => {
  const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`);
  const result = await res.json();
  return result;
};
