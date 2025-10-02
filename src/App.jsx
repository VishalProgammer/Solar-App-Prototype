import { useState } from 'react'
import './App.css'
import { Quiz } from './pages/quiz'
import { Home } from './pages/home.jsx'


function App() {
  const [home, sethome] = useState(false)
  const [game, setgame] = useState(true)

  return (
    <>
    {/* <div id="header">
      <h1>Site name</h1>
      <div id="nav">
        <li>Home</li>
        <li>Stories</li>
        <li>Game</li>
      </div>
    </div>
    <hr /> */}
    <Home></Home>      
    </>
  )
}

export default App
