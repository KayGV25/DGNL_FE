import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (values) => {
    navigate('/reset-password')
    // Xử lý gửi email quên mật khẩu ở đây nếu muốn
  }

  return {
    isLoading,
    onSubmit
  }
}
