import { NextApiRequest, NextApiResponse } from 'next'
import cryptoRandomString from 'crypto-random-string'
import Res from '@libs/utils/res/status'
import cookie from 'cookie'

const App = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const setRes = new Res(res)
  switch (method) {
  case 'POST':
    try {
      if (req.body.setHeader === true) {
        const csrfToken = await cryptoRandomString({
          length: 32,
          type: 'alphanumeric',
        })
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('tempToken', csrfToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            maxAge: 60, // 1 min
          })
        )
        setRes.success({
          msg: 'Authorized',
          token: csrfToken,
        })
      } else {
        setRes.invalidHeader({
          msg: 'Invalid Header',
        })
      }
    } catch (error) {
      setRes.success({
        msg: error,
      })
    }
    break
  default:
    setRes.invalidMethod({
      msg: 'Invalid method',
    })
    break
  }
}

export default App
