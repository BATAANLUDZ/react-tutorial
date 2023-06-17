import { useAtomValue } from 'jotai'
import toast, { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from 'react-error-boundary'

import { tokenAtom } from './atoms'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import LoginPage from './pages/LoginPage/LoginPage'
import TimePage from './pages/TimePage/TimePage'
import { useEffect } from 'react'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import * as React from 'react'
import { QueryErrorResetBoundary } from 'react-query'
import TimeLoading from './pages/TimePage/TimeLoading'
import { SuspenseBoundaries } from './helpers/SuspenseBoundaries'

function App() {
  const token = useAtomValue(tokenAtom)

  useEffect(() => {
    console.log('Main App Re-rendering')
  }, [token])

  if (token) {
    return (
      <div className="h-screen w-screen grid grid-rows-[10vh,_1fr] gap-3">
        <div className="font-shareMono text-[13px] font-bold">
          <Header
            userName="Test User"
            menus={[
              { name: 'Time IN/OUT', path: '/' },
              { name: 'Calendar', path: '/calendar' },
              { name: 'Leave Management', path: '/2' },
              { name: 'Leave Summary', path: '/3' },
            ]}
          />
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <SuspenseBoundaries
                  children={<TimePage />}
                  loading={<TimeLoading />}
                />
              }
            />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </div>
      </div>
    )
  }
  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default App
