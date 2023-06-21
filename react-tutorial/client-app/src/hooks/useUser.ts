import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import jwt from 'jwt-decode'

import { tokenAtom } from '../atoms'
import { User } from '../types'

export const useUser = () => {
  const token = useAtomValue(tokenAtom)
  const [user, setUser] = useState<User>({
    EmpNum: '',
    FullName: '',
    Position: '',
    Shift: '',
    ProjectID: '',
  })

  useEffect(() => {
    const userInfo = jwt<User>(token)
    console.log(userInfo)
    setUser(userInfo)
  }, [token])

  return { user }
}
