import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { getIpInfo } from 'services/server/ip.service';

const handler = nextConnect();

handler.get(async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getIpInfo();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
});

export default handler;
