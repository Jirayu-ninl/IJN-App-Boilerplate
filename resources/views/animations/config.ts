export const footerAnimation: any = {
  Init: { visibility: 'hidden', y: 100 },
  Animated: { visibility: 'visible', y: 0 },
  transition: (delay: number) => ({ delay: delay }),
}

export const yUp: any = {
  Init: { visibility: 'hidden', y: 100 },
  Animated: { visibility: 'visible', y: 0 },
  transition: (delay: number) => ({ delay: delay }),
}

export const stagger_yUp_O = {
  parent: (delay: number) => ({
    hidden: { visibility: 'hidden', y: 50, opacity: 0 },
    show: {
      visibility: 'visible',
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  }),
  children: {
    hidden: { visibility: 'hidden', y: 50, opacity: 0 },
    show: { visibility: 'visible', y: 0, opacity: 1 },
  },
}