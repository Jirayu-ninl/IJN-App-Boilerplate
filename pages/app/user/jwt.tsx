import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Layout from 'views/app/layouts'

const Index = () => {
  const { data: session } = useSession()
  const [JWTdata, setJWTdata] = useState()

  useEffect(() => {
    const getJWT = async () => {
      const { data: jwt } = await axios.get('/api/auth/jwt')
      if (jwt.content) {
        setJWTdata(JSON.stringify(jwt.content, null, 2))
        console.log(jwt.content)
      }
    }
    getJWT()
  }, [session])

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h6 className='mb-2 text-3xl'>Session</h6>
      <pre className='py-4 px-16 bg-black/20 rounded-lg border border-white/10'>{JSON.stringify(session, null, 2)}</pre>
      <h6 className='mt-6 mb-2 text-3xl'>JWT</h6>
      <pre className='py-4 px-16 bg-black/20 rounded-lg border border-white/10'>{JWTdata}</pre>
    </div>
  )
}

const App = () => {
  return (
    <Layout>
      <Index />
    </Layout>
  )
}

App.auth = true

export default App
