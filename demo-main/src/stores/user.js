import { defineStore } from 'pinia'
import { loginFn } from '@/api/user/index.js'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      name: ''
    }
  },
  actions: {
    async login(data) {
      const token = await loginFn(data)
      this.token = token
      window.localStorage.setItem('token', token)
    }
  }
})
