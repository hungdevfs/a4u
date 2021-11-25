import { FC, useEffect, useState } from 'react';

import { getDateInfos } from 'utils/helpers';

const Time: FC = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { time, dayOfWeek } = getDateInfos(now);

  return (
    <div className="bg-indigo-500 flex justify-between items-center p-2">
      <p className="text-white">{dayOfWeek}</p>
      <p className="text-white">{time}</p>
    </div>
  );
};

export default Time;
