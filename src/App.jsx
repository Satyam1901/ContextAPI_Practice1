import Profile from './component/Profile'
import Login from './component/Login'
import UserContextProvider from './contexts/UserContextProvider'
function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
