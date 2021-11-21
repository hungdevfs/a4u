import jwt from 'jsonwebtoken';

import { ACCESS_TOKEN, ROUTES } from './constants';
import { UserInfo } from 'interfaces/commons';

const requirePageAuth = async (context: any) => {
  const {
    req: { cookies },
  } = context;
  try {
    const accessToken = cookies[ACCESS_TOKEN];
    if (!accessToken) throw new Error();

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY as string);
    const user = jwt.decode(accessToken) as UserInfo;

    return { props: { user } };
  } catch (err: any) {
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: false,
      },
    };
  }
};

export default requirePageAuth;
