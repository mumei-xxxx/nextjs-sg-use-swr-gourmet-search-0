import type { NextApiRequest, NextApiResponse } from 'next'

import { fetcher } from '@/libraries/fetcher'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const {
    query: { keyword }
  } = req

  if (typeof process.env.API_URL_ROOT === 'undefined') return

  const API_URL_ROOT = process.env.API_URL_ROOT

  const keywordString: string = Array.isArray(keyword) ? keyword.join(' ') : keyword

  const API_URL =
    keyword === '' || typeof keyword === 'undefined' || keyword === null
      ? API_URL_ROOT
      : `${API_URL_ROOT}&keyword=${encodeURI(keywordString)}`

  const data = await fetcher(API_URL)
  res.end(JSON.stringify(data))
}

// eslint-disable-next-line import/no-default-export
export default handler
