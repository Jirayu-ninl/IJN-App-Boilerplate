export type navRouteType = {
  id: number
  number: string
  title: string
  path: string
}

export const navRoutes: navRouteType[] = [
  {
    id: 1,
    number: '01',
    title: 'HOME',
    path: '/home',
  },
  {
    id: 2,
    number: '02',
    title: 'ABOUT',
    path: '/about',
  },
  {
    id: 3,
    number: '03',
    title: 'SKILLs',
    path: '/about/skills',
  },
  {
    id: 4,
    number: '03',
    title: 'PORTFOLIO',
    path: '/project',
  },
  {
    id: 5,
    number: '04',
    title: 'BLOG',
    path: '/post',
  },
]
