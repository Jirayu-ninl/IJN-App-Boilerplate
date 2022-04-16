import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SignIn, SignUp } from 'views/app/portal'
import { getProviders } from 'next-auth/react'
import { getCsrfToken } from 'next-auth/react'
import { toast } from 'react-toastify'
import { State } from '@store'

const Portal = ({ providers, csrfToken }) => {
  const _setPage = State((state) => state.setPage)
  const [IsSignIn, setIsSignIn] = useState(true)
  const router = useRouter()
  useEffect(() => {
    _setPage('Login')
  }, [_setPage])
  useEffect(() => {
    if (router.query.error === undefined) {
      return
    }
    
    switch (router.query.error) {
    case 'CredentialsSignin':
      toast.error('Invalid username or password')
      break
    case 'OAuthAccountNotLinked':
      toast.error('This email already signup with different social account')
      break
    default:
      toast.error('Error: ' + router.query.error)
    }
  }, [router.query.error])
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-tl from-indigo-600 to-indigo-400'>
      <div className='flex md:h-[410px]'>
        <div className='hidden overflow-hidden relative w-96 h-full rounded-lg md:block'>
          <Image
            src='/cover.jpg'
            layout='fill'
            alt='TheIceJI'
            objectFit='cover'
            quality={100}
          />
        </div>
        <div className='h-full'>
          {IsSignIn ? (
            <SignIn
              setIsSignIn={setIsSignIn}
              providers={providers}
              csrfToken={csrfToken}
            />
          ) : (
            <SignUp setIsSignIn={setIsSignIn} csrfToken={csrfToken} />
          )}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken },
  }
}

export default Portal
