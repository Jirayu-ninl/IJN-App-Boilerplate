import { config as animationConfig } from 'views/animations'
import { Footer as SocialItems } from 'contents/global/contract.socials'
import { SocialLinkIcon } from '../components'
import { UI } from '@store'

export default function Footer() {
  const { Init, Animated, transition } = animationConfig.footerAnimation
  const _setCursor = UI((state) => state.setCursor)
  return (
    <>
      <div className='flex fixed bottom-0 left-0 z-10 flex-col justify-between items-center py-3 px-5 w-screen md:flex-row'>
        <div
          className='flex items-center space-x-4 md:space-x-7'
          onMouseEnter={() => {
            _setCursor('logo')
          }}
          onMouseLeave={() => {
            _setCursor(false)
          }}
          onClick={() => {
            _setCursor(false)
          }}
        >
          {SocialItems.map((v, i) => (
            <SocialLinkIcon
              name={v.name}
              icon={v.icon}
              link={v.link}
              animationDelay={v.animationDelay}
              key={i}
            />
          ))}
        </div>
        <div className='flex items-center mt-2 text-xs md:mt-0 md:text-base'>
          <p>
            <a className='pr-2 cursor-pointer Anim AnimOpacity-60'>
              TheIceJI Next
            </a>
            <span className='opacity-40'>
              | Copyright©{new Date().getFullYear()} by{' '}
            </span>
            <a href='http://TheIceJI.com/home' className='Anim AnimOpacity-60'>
              Jirayu Ninlapun
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
