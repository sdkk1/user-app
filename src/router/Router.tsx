import { Routes, Route } from 'react-router-dom'
import { Login } from 'src/pages/login'
import { Home } from 'src/pages/home'
import { UserList } from 'src/pages/user/list'
import { Setting } from 'src/pages/setting'
import { NotFound } from 'src/pages/notfound'
import { HeaderLayout } from 'src/layout/HeaderLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="user/list" element={<UserList />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
