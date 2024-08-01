import React, { useState } from 'react'
import SearchBox from './components/SearchBox' // Adjust the import path as necessary
import { Paper } from '@mui/material'
import './App.css'

const App = () => {
  const [selectedName, setSelectedName] = useState(null)

  const handleSelectionChange = (newValue) => {
    setSelectedName(newValue)
  }

  return (
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
      {selectedName && (
        <div>
          <h2>Welcome, {selectedName.name}</h2>
        </div>
      )}
      {!selectedName && <SearchBox onSelectionChange={handleSelectionChange} />}
      {selectedName && (
        <div>
          <p>You are seated at {selectedName.table}</p>
        </div>
      )}
    </Paper>

    // <div>
    //   <h1>Guest List</h1>
    //   <SearchBox onSelectionChange={handleSelectionChange} />
    //   {selectedName && (
    //     <div>
    //       <h2>Selected Name</h2>
    //       <p>{selectedName.table}</p>
    //     </div>
    //   )}
    // </div>
  )
}

export default App
