import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { serialize } from 'cookie';

import { LoginRequest } from 'interfaces/commons';
import { login } from 'services/server/account.service';
import { ACCESS_TOKEN } from 'utils/constants';

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    const data = await login({ email, password } as LoginRequest);
    res.setHeader(
      'Set-Cookie',
      serialize(ACCESS_TOKEN, data.accessToken, {
        maxAge: 9000000,
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      }),
    );
    res.status(200).json({ id: data.id, email: data.email, name: data.name });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
});

export default handler;
