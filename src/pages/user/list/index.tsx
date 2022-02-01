import { useEffect, useState } from 'react'
import {
  useDisclosure,
  Center,
  Spinner,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { UserCard } from 'src/components/pages/user/UserCard'
import { UserModalDetail } from 'src/components/pages/user/UserModalDetail'
import { useUserList } from 'src/hooks/useUserList'
import { User } from 'src/types/api/user'
import { useLoginUser } from 'src/hooks/useLoginUser'

export function UserList() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading, userList, getUserList } = useUserList()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const { loginUser } = useLoginUser()
  const isAdmin = loginUser?.isAdmin ?? false

  useEffect(() => {
    void getUserList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClinkUserCard = (userId: number) => {
    const targetUser = userList.find((user) => user.id === userId) ?? null
    setSelectedUser(targetUser)
    onOpen()
  }

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <Wrap justify="center" p={{ base: 4, md: 10 }}>
          {userList.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                userId={user.id}
                userName={user.username}
                fullName={user.name}
                onClick={onClinkUserCard}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserModalDetail
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={isAdmin}
      />
    </>
  )
}
