import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'

type Props = {
  onClose: () => void
  isOpen: boolean
  navigateHome: () => void
  navigateUserManagement: () => void
  navigateSetting: () => void
}

export function HeaderMenuDrawer({
  onClose,
  isOpen,
  navigateHome,
  navigateUserManagement,
  navigateSetting,
}: Props) {
  return (
    <Drawer
      placement="left"
      size="xs"
      autoFocus={false}
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" variant="unstyled" onClick={navigateHome}>
              Home
            </Button>
            <Button
              w="100%"
              variant="unstyled"
              onClick={navigateUserManagement}
            >
              ユーザー一覧
            </Button>
            <Button w="100%" variant="unstyled" onClick={navigateSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
