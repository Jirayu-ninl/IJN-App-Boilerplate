import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

const App = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      content: `Signed in as ${session.user.email}`,
    })
  } else {
    res.send({
      content: 'Please Sign in',
    })
  }
}

export default App
