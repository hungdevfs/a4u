import { FC, useContext } from 'react';
import { useQuery } from 'react-query';

import { AppContext } from 'contexts/app.context';
import { getWeather, getWeatherIcon } from 'services/client/weather.service';

const get = async (city: string, country: string) => {
  if (!city || !country) return null;
  const res = await getWeather(city, country);
  console.log(res);
  return res.data;
};

const Weather: FC = () => {
  const { ip } = useContext(AppContext);
  const { isLoading, error, data } = useQuery('weather', () =>
    get(ip?.region as string, ip?.country as string),
  );

  return <div className="border rounded border-green-500">Weather widget</div>;
};

export default Weather;
