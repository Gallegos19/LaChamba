import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'
import Login from '../components/molecules/Login/Login'
import Register from '../components/molecules/Register/Register'
import Card from '../components/molecules/card/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Login /> */}
        {/* <Register /> */}
        <Card />
      </div>
    </>
  )
}

export default App
