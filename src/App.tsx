import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import theme from 'src/style/theme'
import { LoginUserProvider } from 'src/providers/LoginUserProvider'
import { Router } from 'src/router/Router'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoginUserProvider>
    </ChakraProvider>
  )
}

export default App
