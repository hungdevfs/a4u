import { useContext, useEffect } from 'react';
import { AppContext } from 'contexts/app.context';
import { UserInfo } from 'interfaces/commons';

const useUserInfo = (userInfo: UserInfo) => {
  const { user, setUser } = useContext(AppContext);
  useEffect(() => {
    if (userInfo && !user) {
      setUser?.(userInfo);
    }
  }, []);
};

export default useUserInfo;
