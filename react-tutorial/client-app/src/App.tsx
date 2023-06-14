import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import TimePage from './pages/TimePage/TimePage'

function App() {
  return (
    <div className="h-screen w-screen grid grid-rows-[10vh,_1fr] gap-3">
      <div className="font-fuzy text-[13px] font-bold">
        <Header
          userName="Test User"
          menus={[
            { name: 'Time IN/OUT', path: '/' },
            { name: 'Calendar', path: '/1' },
            { name: 'Leave Management', path: '/2' },
            { name: 'Leave Summary', path: '/3' },
          ]}
        />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<TimePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
