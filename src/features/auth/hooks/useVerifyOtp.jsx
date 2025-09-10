import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useVerifyOtp() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    setIsLoading(true)
    try {
      navigate('/login')
    } catch (error) {
      alert('Có lỗi xảy ra khi xác thực OTP')
    } finally {
      setIsLoading(false)
    }
  }

  return { onSubmit, isLoading }
}
