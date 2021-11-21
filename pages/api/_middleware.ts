import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

import { UserInfo } from 'interfaces/commons';
import { NextApiAuthRequest } from 'interfaces/apis';
import { ACCESS_TOKEN, ROUTES } from 'utils/constants';

const freeAuthRoutes = ['/api/accounts/login', '/api/ip'];

export const middleware = (req: NextApiAuthRequest) => {
  const { url, cookies } = req;
  const isAuthRoute = !freeAuthRoutes.includes(url as string);

  if (isAuthRoute) {
    try {
      const accessToken = cookies[ACCESS_TOKEN];
      if (!accessToken) throw new Error();

      jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY as string);
      const userInfo = jwt.decode(accessToken) as UserInfo;

      req.userId = userInfo.id;
      req.userEmail = userInfo.email;
    } catch {
      return NextResponse.redirect(ROUTES.LOGIN);
    }
  }
};
