import { useToast } from '@chakra-ui/react'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

export const useMessage = () => {
  const toast = useToast()

  const showMessage = ({ title, status }: Props) => {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
      position: 'top-right',
    })
  }

  return { showMessage }
}
