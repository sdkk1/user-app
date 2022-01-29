import { Routes, Route } from 'react-router-dom'
import { Login } from 'src/pages/login'
import { Home } from 'src/pages/home'
import { Setting } from 'src/pages/setting'
import { UserManagement } from 'src/pages/user/management'
import { NotFound } from 'src/pages/notfound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/user/management" element={<UserManagement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
