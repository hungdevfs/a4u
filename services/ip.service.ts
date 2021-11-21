import { PrismaClient } from '.prisma/client';
import axios from 'axios';

import { IPInfo } from 'interfaces/commons';

const prisma = new PrismaClient();

export const getIpInfo = async () => {
  await prisma.$connect();
  const ip = (await getIp()).ip;
  const ipInfo = await prisma.ip.findFirst({ where: { ip } });
  let data: IPInfo;
  if (!ipInfo) {
    const ipInfo = await getIpCloudInfo();
    data = ipInfo;
    await prisma.ip.create({ data });
  } else {
    const { ip, region, country, timezone } = ipInfo;
    data = { ip, region, country, timezone } as IPInfo;
  }
  await prisma.$disconnect();
  return data;
};

const getIp = async () => {
  const IP_URL = (process.env.IP_URL as string) || '';
  const res = await axios.get(IP_URL);
  return res.data;
};

const getIpCloudInfo = async () => {
  const IP_INFO_URL = process.env.IP_INFO_URL;
  const IP_INFO_TOKEN = process.env.IP_INFO_TOKEN;
  const res = await axios.get(`${IP_INFO_URL}?token=${IP_INFO_TOKEN}`);
  const { ip, region, country, timezone } = res.data;
  return {
    ip,
    region,
    country,
    timezone,
  } as IPInfo;
};
