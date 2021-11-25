import { FC, ReactNode } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Tabs from './Tabs';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <PerfectScrollbar className="flex-grow overflow-y-auto overflow-x-hidden">
        {children}
      </PerfectScrollbar>
      <Tabs />
    </div>
  );
};

export default Container;
