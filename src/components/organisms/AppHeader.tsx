import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { HeaderHamburgerIcon } from 'src/components/organisms/header/HeaderHamburgerIcon'
import { HeaderMenuDrawer } from 'src/components/organisms/header/HeaderMenuDrawer'

export function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/home')
    onClose()
  }
  const navigateUserManagement = () => {
    navigate('/home/user/list')
    onClose()
  }
  const navigateSetting = () => {
    navigate('/home/setting')
    onClose()
  }

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        bg="teal.500"
        color="gray.50"
      >
        <Link as={RouterLink} to="/home" mr={8}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Link>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          align="center"
          flexGrow={1}
          fontSize="sm"
        >
          <Box pr={4}>
            <Link as={RouterLink} to="/home/user/list">
              ユーザー一覧
            </Link>
          </Box>
          <Link as={RouterLink} to="/home/setting">
            設定
          </Link>
        </Flex>
        <HeaderHamburgerIcon onOpen={onOpen} />
      </Flex>
      <HeaderMenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        navigateHome={navigateHome}
        navigateUserManagement={navigateUserManagement}
        navigateSetting={navigateSetting}
      />
    </>
  )
}
