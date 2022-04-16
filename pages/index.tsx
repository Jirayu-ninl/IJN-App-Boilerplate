import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { State } from '@store'

export default function Main() {
  const _setPage = State((state) => state.setPage)

  useEffect(() => {
    _setPage('Home')
  }, [_setPage])

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-blue-500'>
      <h1 className='text-3xl'>IJN Boilerplate 1.0</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'TheIceJI | Home',
    },
  }
}
