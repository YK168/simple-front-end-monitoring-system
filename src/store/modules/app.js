import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    sidebarOpened: true
  }),
  getter: {
    getSidebarOpened () {
      return this.sidebarOpened
    }
  }
})
