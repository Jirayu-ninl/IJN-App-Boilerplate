import { motion } from 'framer-motion'
import { config as animationConfig } from 'views/animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function SocialLinkIcon({
  name,
  link,
  animationDelay,
}: {
  name: any
  icon: string
  link: string
  animationDelay: number
}) {
  const { Init, Animated, transition } = animationConfig.footerAnimation
  return (
    <motion.a
      initial={Init}
      animate={Animated}
      transition={transition(animationDelay)}
      href={link}
    >
      {SocialIconGenerator(name)}
    </motion.a>
  )
}

const SocialIconGenerator = (name) => {
  if (name === 'Facebook') {
    return <FontAwesomeIcon icon={brands('facebook-f')} size="xs" className="h-4 Anim AnimScale AnimOpacity-40" />
  } else if (name === 'Instagram') {
    return <FontAwesomeIcon icon={brands('instagram')} size="xs" className="h-4 Anim AnimScale AnimOpacity-40" />
  } else if (name === 'Youtube') {
    return <FontAwesomeIcon icon={brands('youtube')} size="xs" className="h-4 Anim AnimScale AnimOpacity-40" />
  } else if (name === 'Mail') {
    return <FontAwesomeIcon icon={solid('envelope')} size="xs" className="h-4 Anim AnimScale AnimOpacity-40" />
  } else {
    return <FontAwesomeIcon icon={brands('discord')} size="xs" className="h-4 Anim AnimScale AnimOpacity-40" />
  }
}
