import { defineStore } from 'pinia'
import { getSelectProject, setSelectProject } from '../../utils/userCache'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    sidebarOpened: true,
    selectProject: null
  }),
  getters: {
    getSidebarOpened () {
      return this.sidebarOpened
    },
    getSelectProject () {
      return this.selectProject || getSelectProject()
    }
  },
  actions: {
    setSelectProject (data) {
      this.selectProject = data
      setSelectProject(data)
    }
  }
})
