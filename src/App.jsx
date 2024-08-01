import React, { useState } from 'react'
import SearchBox from './components/SearchBox' // Adjust the import path as necessary
import { Card, Paper } from '@mui/material'
import './App.css'
import qrCode from './assets/seatLocator.png'

const App = () => {
  const [selectedName, setSelectedName] = useState(null)

  const handleSelectionChange = (newValue) => {
    setSelectedName(newValue)
  }

  return (
    <Card>
      <Paper
        elevation={22}
        style={{
          padding: 20,
          margin: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {selectedName && (
          <div>
            <h2>
              Welcome, <div>{selectedName.name}</div>
            </h2>
          </div>
        )}
        {!selectedName && (
          <div>
            <p>
              Please begin typing your name below and <strong>select</strong>{' '}
              your name to locate your table
            </p>
            <SearchBox onSelectionChange={handleSelectionChange} />
          </div>
        )}
        {selectedName && (
          <div>
            <p>You are seated at {selectedName.table}</p>
          </div>
        )}
        {selectedName && (
          <div>
            <img
              style={{
                width: '160px',
                height: '160px',
                margin: '20px'
              }}
              src={qrCode}
              alt="Seat Locator"
            />
            <p>Share this QR code with others to help them find their table</p>
            <p>Pull down on this screen to start a new search</p>
          </div>
        )}
      </Paper>
    </Card>

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
