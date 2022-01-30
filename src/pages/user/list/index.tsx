import { useEffect } from 'react'
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import { UserCard } from 'src/components/organisms/user/UserCard'
import { useUserList } from 'src/hooks/useUserList'

export function UserList() {
  const { loading, userList, getUserList } = useUserList()
  useEffect(() => {
    void getUserList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
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
              <UserCard userName={user.username} fullName={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
}
