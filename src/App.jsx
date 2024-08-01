import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './components/SearchBox'
import { Paper } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Paper
        elevation={7}
        style={{
          padding: 20,
          margin: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <SearchBox />
      </Paper>
    </div>
  )
}

export default App
