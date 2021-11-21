import type { NextApiRequest } from 'next';

export interface NextApiAuthRequest extends NextApiRequest {
  userId: string;
  userEmail: string;
}
