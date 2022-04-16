/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from '@libs/hooks'
import { motion } from 'framer-motion'
import { State, User } from '@store'
import UserBlock from './user'
import { useSession, signOut } from 'next-auth/react'
import NotificationBlock from './notification'
import {
  MenuIcon,
  CloseIcon,
  UserIcon,
  SeparatorLine,
} from '../assets'

export default function IJNNav({
  setToggleMenu,
  toggleMenu,
}: {
  setToggleMenu: any
  toggleMenu: boolean
}) {
  const _page = State((state) => state.page)
  const _Notification = User((state) => state.notification)

  const [PopupState, setPopupState] = useState({
    notification: false,
    userPanel: false,
  })

  const NavRef = useRef(null)
  useOnClickOutside(NavRef, () => setNavPopupState('all'))

  const setNavPopupState = (current: string) => {
    switch (current) {
    case 'notification':
      setPopupState({
        notification: !PopupState.notification,
        userPanel: false,
      })
      break
    case 'userPanel':
      setPopupState({
        notification: false,
        userPanel: !PopupState.userPanel,
      })
      break
    case 'all':
      setPopupState({
        notification: false,
        userPanel: false,
      })
      break
    default:
      break
    }
  }

  const { data: session } = useSession()

  return (
    <nav className='fixed top-0 left-0 z-80 py-4 px-5 w-screen' ref={NavRef}>
      <div className='bg-black/40 rounded-md shadow-xl backdrop-blur-md'>
        <div className='flex justify-between items-center px-6 h-16'>
          <div className='flex items-center h-full'>
            <motion.div className='flex items-center py-3 pr-6 h-full cursor-pointer'>
              <Link href='/' passHref>
                <img
                  className='h-full'
                  src='/logo_white.svg'
                  alt='TheIceJI logo'
                />
              </Link>
            </motion.div>
            <svg
              className='hidden md:block'
              xmlns='http://www.w3.org/2000/svg'
              width='2'
              height='23'
              viewBox='0 0 2 23'
            >
              <rect width='2' height='23' rx='1' fill='#fff' opacity='0.2' />
            </svg>
            <h6 className='hidden px-5 md:block'>{_page}</h6>
          </div>
          <div className='flex items-center h-full'>
            {toggleMenu && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='flex absolute top-20 left-6 space-x-7 fill-white md:hidden'
              >
                <NotificationBlock
                  OpenNotification={PopupState.notification}
                  setNavPopupState={setNavPopupState}
                  _Notification={_Notification}
                />
              </motion.div>
            )}
            <div className='hidden space-x-7 fill-white md:flex'>
              <NotificationBlock
                OpenNotification={PopupState.notification}
                setNavPopupState={setNavPopupState}
                _Notification={_Notification}
              />
            </div>
            <div className='hidden md:block md:px-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='23'
                viewBox='0 0 2 23'
              >
                <rect width='2' height='23' rx='1' fill='#fff' opacity='0.2' />
              </svg>
            </div>
            {session && (
              <>
                <UserBlock
                  signOut={signOut}
                  user={session.user}
                  setNavPopupState={setNavPopupState}
                  OpenPanel={PopupState.userPanel}
                />
                <SeparatorLine />
              </>
            )}
            <motion.div
              className='flex space-x-4 fill-white'
            >
              {!session && (
                <Link href='/app/portal'>
                  <a>
                    <UserIcon />
                  </a>
                </Link>
              )}
              <div
                className='cursor-pointer'
                onClick={() => {
                  setToggleMenu(!toggleMenu)
                  setNavPopupState('all')
                }}
              >
                {toggleMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
}
