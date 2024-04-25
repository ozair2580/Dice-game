
import { useState } from 'react'
import './App.css'
import StartGame from './Components/StartGame'
import Main from './Components/PlayGame/Main'

function App() {
  const [hide,sethide]=useState(false)

  return (
    <>
      {
        hide===false ?  <StartGame data={sethide}/> : <Main/>
      }
     
      
    </>
  )
}

export default App
