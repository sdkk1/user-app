import { useContext } from 'react'
import { LoginUserContext } from 'src/providers/LoginUserProvider'

export const useLoginUser = () => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext)
  return {
    loginUser,
    setLoginUser,
  }
}
