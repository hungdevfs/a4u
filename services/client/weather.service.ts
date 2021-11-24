import axios from 'axios';

const WEATHER_URL = process.env.NEXT_PUBLIC_WEATHER_URL as string;
const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY as string;
const WEATHER_ICON_URL = process.env.NEXT_PUBLIC_WEATHER_ICON_URL as string;

export const getWeather = (city: string, country: string) => {
  console.log({ city, country, WEATHER_URL });
  return axios.get(WEATHER_URL, {
    params: { key: WEATHER_KEY, city, country },
  });
};

export const getWeatherIcon = (icon: string) =>
  `${WEATHER_ICON_URL}/${icon}.png`;
