import { useEffect, useState } from 'react'
import { globalStyles } from 'views/theme/css/global'
import { User } from '@store'

import { NavBar } from './nav'

type IJNlayout = {
  children: React.ReactNode
  showNav: React.ReactNode
}

export default function IJNlayout({ children, showNav }: IJNlayout) {
  const _setNotification = User((state) => state.setNotification)
  const _NotificationItems = User((state) => state.notificationItems)

  useEffect(() => {
    _setNotification(
      typeof _NotificationItems === 'boolean' ? 0 : _NotificationItems.length
    )
  }, [_setNotification, _NotificationItems])

  const Darkmode = true
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      {globalStyles(Darkmode)}
      {showNav && (
        <>
          <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </>
      )}
      {children}
    </>
  )
}
