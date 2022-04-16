import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

const Authenticated =
  (Fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req, secret })
    if (token) {
      return await Fn(req, res)
    } else {
      res.status(500).json({ success: false, error: 'No permission!!' })
    }
  }

const App = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret })
  res.send({
    content: token,
  })
}

export default Authenticated(App)
