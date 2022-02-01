import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from 'react'
import { LoginUser } from 'src/types/api/user'

type LoginUserContextType = {
  loginUser: LoginUser | null
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

type Props = {
  children: ReactNode
}

export function LoginUserProvider({ children }: Props) {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    loginUser,
    setLoginUser,
  }

  return (
    <LoginUserContext.Provider value={contextValue}>
      {children}
    </LoginUserContext.Provider>
  )
}
