import { ChangeEvent, useState } from 'react'
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import { PrimaryButton } from 'src/components/atoms/button/PrimaryButton'
import { useAuth } from 'src/hooks/useAuth'

export function Login() {
  const [userId, setUserId] = useState('')
  const isEmptyUserId = userId === ''
  const onChangeuserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)
  const { loading, login } = useAuth()
  const onClickLogin = () => login(userId)

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box w="sm" p={6} bg="white" borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeuserId}
          />
          <PrimaryButton
            disabled={isEmptyUserId}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
}
