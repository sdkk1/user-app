import { Box, Image, Stack, Text } from '@chakra-ui/react'
import { USER_PROFILE_URL } from 'src/constants/User'

type Props = {
  userName: string
  fullName: string
}

export function UserCard({ userName, fullName }: Props) {
  return (
    <Box
      w="260px"
      h="260px"
      p={4}
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack spacing={4} textAlign="center">
        <Image
          src={USER_PROFILE_URL}
          alt={userName}
          m="auto"
          boxSize="140px"
          borderRadius="full"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
}
