import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { NextApiAuthRequest } from 'interfaces/apis';
import { getInfo } from 'services/server/account.service';

const handler = nextConnect();

handler.get(async (req: NextApiAuthRequest, res: NextApiResponse) => {
  try {
    const data = await getInfo(req.userId);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
});

export default handler;
