import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { USERS_URL } from 'src/constants/User'
import { User } from 'src/types/api/user'
import { useMessage } from 'src/hooks/useMessage'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { showMessage } = useMessage()

  const login = async (id: string) => {
    setLoading(true)
    try {
      const res = await axios.get<User>(`${USERS_URL}/${id}`)
      if (res.status === 200 && res.data) {
        showMessage({ title: 'ログインしました', status: 'success' })
        navigate('/home')
      }
    } catch (error) {
      showMessage({ title: 'ログインに失敗しました', status: 'error' })
    }
    setLoading(false)
  }

  return { loading, login }
}
