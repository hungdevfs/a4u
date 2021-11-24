import { useCallback, useContext, useEffect } from 'react';

import { AppContext } from 'contexts/app.context';
import { UserInfo, IPInfo } from 'interfaces/commons';
import { IP_INFO } from 'utils/constants';
import { getIp, getIpCloudInfo } from 'services/client/ip.service';

const useInitContext = (userInfo: UserInfo) => {
  const { user, setUser, ip, setIp } = useContext(AppContext);

  useEffect(() => {
    if (userInfo && !user) {
      setUser?.(userInfo);
    }

    if (!ip) {
      getIpInfo();
    }
  }, []);

  const getIpInfo = useCallback(async () => {
    const currentIp = await getIp();
    const savedIpInfoString = localStorage.getItem(IP_INFO);
    const parsedSavedIpInfo = savedIpInfoString
      ? (JSON.parse(savedIpInfoString) as IPInfo)
      : null;

    if (!parsedSavedIpInfo || parsedSavedIpInfo.ip !== currentIp) {
      const newIpInfo = await getIpCloudInfo();
      localStorage.setItem(IP_INFO, JSON.stringify(newIpInfo));
      setIp?.(newIpInfo);
      return;
    }

    setIp?.(parsedSavedIpInfo);
  }, []);
};

export default useInitContext;
