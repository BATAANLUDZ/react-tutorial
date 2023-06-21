import { useAtomValue } from 'jotai'
import * as React from 'react'

import { tokenAtom } from './atoms'
import LoginPage from './pages/LoginPage/LoginPage'
import jwt from 'jwt-decode'
import MainPage from './pages/MainPage/MainPage'

function App() {
  const token = useAtomValue(tokenAtom)
  const [user, setUser] = React.useState<string>('')

  React.useEffect(() => {
    console.log('Main App Re-rendering')
  }, [token])

  return token || token !== '' ? <MainPage /> : <LoginPage />
}

export default App
