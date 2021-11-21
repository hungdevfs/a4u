import { PrismaClient } from '.prisma/client';
import jwt from 'jsonwebtoken';
import passwordHash from 'password-hash';

import { LoginRequest, LoginReponse } from 'interfaces/commons';
import { ERRORS } from 'utils/constants';

const prisma = new PrismaClient();

export const login = async (loginInfo: LoginRequest) => {
  await prisma.$connect();
  const { email, password } = loginInfo;
  const user = await prisma.user.findFirst({ where: { email } });
  if (!user) throw new Error(ERRORS.BAD_CREDENTIAL);

  const passed = passwordHash.verify(password, user.password);
  if (!passed) throw new Error(ERRORS.BAD_CREDENTIAL);

  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET_KEY as string,
    {
      expiresIn: process.env.JWT_ACCESS_TOKEN_LIFE,
    },
  );

  const data: LoginReponse = {
    id: user.id,
    email: user.email,
    name: user.name,
    accessToken,
  };

  await prisma.$disconnect();
  return data;
};
