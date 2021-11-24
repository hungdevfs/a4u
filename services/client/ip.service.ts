import axios from 'axios';

import { IPInfo } from 'interfaces/commons';

export const getIp = async () => {
  const IP_URL = (process.env.NEXT_PUBLIC_IP_URL as string) || '';
  const res = await axios.get(IP_URL);
  return res.data.ip;
};

export const getIpCloudInfo = async () => {
  const IP_INFO_URL = process.env.NEXT_PUBLIC_IP_INFO_URL;
  const IP_INFO_TOKEN = process.env.NEXT_PUBLIC_IP_INFO_TOKEN;
  const res = await axios.get(`${IP_INFO_URL}?token=${IP_INFO_TOKEN}`);
  const { ip, region, country, timezone } = res.data;
  return {
    ip,
    region,
    country,
    timezone,
  } as IPInfo;
};
