import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import TimePage from './pages/TimePage/TimePage'

function App() {
  return (
    <div className="font-orbit h-screen w-screen grid grid-rows-[10vh,_1fr] gap-3">
      <div>
        <Header userName="Test User" menus={[{ name: 'Time', path: '/' }]} />
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
