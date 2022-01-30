import { ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

export function PrimaryButton({
  children,
  disabled = false,
  loading = false,
  onClick,
}: Props) {
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.6 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
