import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    setIsLoading(true)
    try {
      navigate('/login')
    } catch (error) {
      alert('Có lỗi xảy ra khi đặt lại mật khẩu')
    } finally {
      setIsLoading(false)
    }
  }

  return { onSubmit, isLoading }
}
