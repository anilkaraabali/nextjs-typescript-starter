// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>): void {
  res.status(200).json({ name: 'Welcome to Typescript Nextjs Starter' });
}
