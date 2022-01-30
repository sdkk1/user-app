import axios from 'axios'
import { useState } from 'react'
import { USERS_URL } from 'src/constants/User'
import { User } from 'src/types/api/user'
import { useMessage } from 'src/hooks/useMessage'

export const useUserList = () => {
  const [loading, setLoading] = useState(false)
  const [userList, setUserList] = useState<User[]>([])
  const { showMessage } = useMessage()

  const getUserList = async () => {
    setLoading(true)
    try {
      const res = await axios.get<User[]>(USERS_URL)
      if (res.status === 200 && res.data.length > 0) {
        setUserList(res.data)
      }
    } catch (error) {
      showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' })
    }
    setLoading(false)
  }

  return { loading, userList, getUserList }
}
