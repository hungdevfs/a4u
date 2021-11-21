import { createContext, useState, FC } from 'react';

import { AppState, UserInfo, IPInfo } from 'interfaces/commons';

interface Props {
  children: any;
}

export const AppContext = createContext<AppState>({});

export const AppContextProvider: FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<UserInfo>();
  const [ip, setIp] = useState<IPInfo>();

  return (
    <AppContext.Provider value={{ user, ip, setUser, setIp }}>
      {children}
    </AppContext.Provider>
  );
};
