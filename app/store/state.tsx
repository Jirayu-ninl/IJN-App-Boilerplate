import create from 'zustand'

const store = (set) => ({
  page: 'Home',
  setPage: (p: string) => set(() => ({ page: p })),
})

const store_State = create(store)

export default store_State