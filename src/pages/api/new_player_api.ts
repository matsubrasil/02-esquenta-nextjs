import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await axios.post('http://localhost:8000/players', { name: req.body.name });
  await res.revalidate('/players-isr-on-demand');
  res.status(201);
}
