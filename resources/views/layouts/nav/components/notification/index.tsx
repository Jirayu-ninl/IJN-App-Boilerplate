import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import { User } from '@store'
import { NotiIcon } from '../../assets'

const NotificationBlock = ({
  OpenNotification,
  setNavPopupState,
  _Notification,
}) => (
  <span
    className='flex relative items-center h-full cursor-pointer'
    onClick={() => {
      setNavPopupState('notification')
    }}
  >
    <div className='w-6 h-6 Anim AnimScale'>
      <NotiIcon />
      {_Notification !== 0 && _Notification && (
        <span className='NotiBadge-primary '>{_Notification}</span>
      )}
    </div>
    <AnimatePresence>
      {OpenNotification && <Notification key='NAV_Noti' />}
    </AnimatePresence>
  </span>
)

const Notification = ({ ref }) => {
  const _setNotification = User((state) => state.setNotification)
  const _NotificationItems = User((state) => state.notificationItems)

  const Amount =
    typeof _NotificationItems === 'boolean' ? 0 : _NotificationItems.length

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='flex absolute top-14 flex-col py-4 w-48 max-h-64 drop-shadow-md  md:right-0 Card-back-md-60 '
    >
      <h5 className='mb-2 text-base font-semibold text-center'>Notification</h5>
      {Amount === 0 || !_NotificationItems ? (
        <div className='flex justify-center items-center h-24'>
          <p className='text-xs font-light text-center opacity-60'>
            notification is empty
          </p>
        </div>
      ) : (
        <>
          <NotificationItems list={_NotificationItems} />
          <p
            className='pt-2 text-xs font-light text-center opacity-60 cursor-pointer'
            onClick={() => {
              _setNotification(0)
              toast.success('Mark notification as read')
            }}
          >
            mark as read
          </p>
        </>
      )}
    </motion.div>
  )
}

const NotificationItems = ({ list }) => (
  <div className='overflow-scroll h-full'>
    {list.map((v, i) => (
      <Link href={v.link} passHref key={i}>
        <div className='p-2 mt-1 w-full bg-black/20 border-2 border-transparent border-l-primary-0 cursor-pointer Anim AnimOpacity-80'>
          <h6 className='text-xs'>{v.title}</h6>
          <p className='mt-1 text-xs font-light opacity-80'>{v.description}</p>
          <p className='mt-1 -mb-1 text-2xs font-light text-right opacity-80'>
            {v.time}
          </p>
        </div>
      </Link>
    ))}
  </div>
)

export default NotificationBlock
