import './App.css'
import VerticalNavbar from './components/verticalNavbar/verticalNavbar'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <div className="parent">
        <VerticalNavbar />
        <Dashboard />
      </div>
    </>
  )
}

export default App
