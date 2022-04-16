import create from 'zustand'
import Notification from 'app/data/notification'

const store: tStore = (set) => ({
  notification: false,
  setNotification: (n) => set(() => ({ notification: n })),
  notificationItems: [...Notification],
  setNotificationItems: (n) => set(() => ({ notificationItems: n })),
})

type tStore = (set: any) => {
  notification: number | boolean
  setNotification: (n: number | boolean) => void
  notificationItems: oNotification[] | boolean
  setNotificationItems: (n: []) => void
}

type oNotification = {
  title: string
  description: string
  link: string
  time: string
}

const store_User = create(store)

export default store_User