import { motion } from 'framer-motion'

const UsePageTransition = ({ children, router }) => {
  const Variants = {
    pageInitial: { opacity: 0 },
    pageAnimate: { opacity: 1 },
  }

  const Transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  return (
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      transition={Transition}
      variants={Variants}
    >
      {children}
    </motion.div>
  )
}

export default UsePageTransition
