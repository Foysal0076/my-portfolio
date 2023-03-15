import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({ name: 'Say Hi from Foysal Ahmed, React and Next.js Developer' })
}
