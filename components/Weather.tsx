import { FC, useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';

import { AppContext } from 'contexts/app.context';
import { getWeather, getWeatherIcon } from 'services/client/weather.service';

const get = async (city: string, country: string) => {
  console.log({ city, country });
  if (!city || !country) return null;
  const res = await getWeather(city, country);
  return res.data;
};

const Weather: FC = () => {
  const { ip } = useContext(AppContext);
  const { isLoading, error, data } = useQuery(
    ['weather', ip?.region, ip?.country],
    () => get(ip?.region as string, ip?.country as string),
  );

  const weather = useMemo(() => {
    if (!data) return null;
    const weatherData = data.data?.[0];
    return {
      temp: weatherData.temp,
      description: weatherData.weather?.description,
      icon: weatherData.weather?.icon
        ? getWeatherIcon(weatherData.weather.icon)
        : '',
    };
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Loading...</p>;

  if (weather)
    return (
      <div className="bg-indigo-400 p-1 flex justify-between items-center">
        <Image src={weather.icon} width={80} height={80} />
        <div className="pr-3 flex flex-col items-end justify-center">
          <p className="text-center text-3xl text-white">
            {ip?.region}, {ip?.country}
          </p>
          <p className="text-white text-xl">
            {weather.temp}°C | {weather.description}
          </p>
        </div>
      </div>
    );

  return null;
};

export default Weather;
