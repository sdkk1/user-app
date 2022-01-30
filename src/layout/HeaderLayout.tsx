import { Outlet } from 'react-router-dom'
import { AppHeader } from 'src/components/organisms/AppHeader'

export function HeaderLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}
