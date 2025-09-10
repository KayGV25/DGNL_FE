import axios from 'axios'

export const authService = {
  async login(credentials) {
    return axios.post(`${import.meta.env.VITE_API_URL}/login`, credentials, {
      withCredentials: true
    })
  }
}
