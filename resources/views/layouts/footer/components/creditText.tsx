import { motion } from 'framer-motion'
import { config as animationConfig } from 'views/animations'

export default function CreditText({ delay }: { delay: number }) {
  const { Init, Animated, transition } = animationConfig.footerAnimation

  return (
    <motion.p initial={Init} animate={Animated} transition={transition(delay)}>
      <span>Copyright©{new Date().getFullYear()} by </span>
      <a href='http://TheIceJI.com/home'>Jirayu Ninlapun</a>
      <span>. All rights reserved</span>
    </motion.p>
  )
}
