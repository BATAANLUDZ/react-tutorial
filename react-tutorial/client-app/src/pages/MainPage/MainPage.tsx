import { Route, Routes } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { SuspenseBoundaries } from '../../helpers/SuspenseBoundaries'
import CalendarPage from '../CalendarPage/CalendarPage'
import TimeLoading from '../TimePage/TimeLoading'
import TimePage from '../TimePage/TimePage'
import { useUser } from '../../hooks/useUser'

export default function MainPage() {
  const { user } = useUser()

  return (
    <div className="h-screen w-screen grid grid-rows-[10vh,_1fr] gap-3">
      <div className="font-shareMono text-[13px] font-bold">
        <Header
          userName={user?.FullName || ''}
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
                children={<TimePage user={user} />}
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
