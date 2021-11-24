import { FC } from 'react';
import Image from 'next/image';

import Icons from 'assets/Icons';

const Tabs: FC = () => {
  return (
    <div className="h-18 p-2 flex justify-around items-center">
      <Image
        src={Icons.weather}
        width="32"
        height="32"
        className="cursor-pointer hover:opacity-60"
      />{' '}
      |
      <Image
        src={Icons.note}
        width="32"
        height="32"
        className="cursor-pointer hover:opacity-60"
      />{' '}
      |
      <Image
        src={Icons.contact}
        width="32"
        height="32"
        className="cursor-pointer hover:opacity-60"
      />
    </div>
  );
};

export default Tabs;
