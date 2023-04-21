import './App.css'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import Delete from './pages/Delete'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/get" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  )
}

export default App