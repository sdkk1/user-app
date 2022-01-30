import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  onOpen: () => void
}

export function HeaderHamburgerIcon({ onOpen }: Props) {
  return (
    <IconButton
      icon={<HamburgerIcon />}
      aria-label="メニューボタン"
      display={{ base: 'block', md: 'none' }}
      size="sm"
      variant="unstyled"
      onClick={onOpen}
    />
  )
}
