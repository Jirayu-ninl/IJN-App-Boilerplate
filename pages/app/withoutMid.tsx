import { useState, useEffect } from 'react'
import Layout from 'views/app/layouts'
import axios from 'axios'
import { useSession, signIn, signOut } from 'next-auth/react'
import { css } from '@emotion/css'

const Container = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Dashboard = () => {
  const { data: session } = useSession()
  const [content, setContent] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/auth/content')
      if (data.content) {
        setContent(data.content)
      }
    }
    fetchData()
  }, [session])

  if (session) {
    return (
      <div className={Container}>
        <h2>Welcome to Dashboard</h2>
        {content} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className={Container}>
      <h1>Please Sign in</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

const App = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

App.auth = true

export default App
