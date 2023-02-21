import type { NextApiRequest, NextApiResponse } from 'next'
import { posts } from '@/posts'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { q } = req.query

  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter `q`' })
  }

  const results = posts.filter((post) => post.title.includes(q as string))
  res.status(200).json(results)
}
