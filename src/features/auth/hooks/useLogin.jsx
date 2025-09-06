import { useState } from 'react'
import { useNavigate } from 'react-router'
import { authService } from '../services/authService'

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      setIsLoading(true)
      const response = await authService.login(values)

      console.log(response)

      const { data, message } = response.data

      if (data.token) {
        navigate('/')
      } else {
        navigate('/otp', {
          state: { email: values.username }
        })
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra'

      switch (error.response?.status) {
        case 404:
          alert('Không tìm thấy người dùng')
          break
        case 401:
          alert('Mật khẩu không đúng')
          break
        case 409:
          alert('Tài khoản đã bị vô hiệu hóa')
          break
        default:
          alert(errorMessage)
      }
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    onSubmit
  }
}
