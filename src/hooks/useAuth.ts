import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { USERS_URL } from 'src/constants/User'
import { User } from 'src/types/api/user'
import { useLoginUser } from 'src/hooks/useLoginUser'
import { useMessage } from 'src/hooks/useMessage'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setLoginUser } = useLoginUser()
  const { showMessage } = useMessage()

  const login = async (id: string) => {
    try {
      setLoading(true)
      const res = await axios.get<User>(`${USERS_URL}/${id}`)
      if (res.status === 200 && res.data) {
        const isAdmin = res.data.id === 1
        setLoginUser({ ...res.data, isAdmin })
        showMessage({ title: 'ログインしました', status: 'success' })
        navigate('/home')
      }
    } catch (error) {
      showMessage({ title: 'ログインに失敗しました', status: 'error' })
      setLoading(false)
    }
  }

  return { loading, login }
}
