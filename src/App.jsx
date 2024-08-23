import React, { useState } from 'react'
import SearchBox from './components/SearchBox' // Adjust the import path as necessary
import { Button, Card, Link, Paper } from '@mui/material'
import './App.css'
import qrCode from './assets/seatLocator.png'
import './firebase'
import { Footer } from './components/Footer'

const App = () => {
  const [selectedName, setSelectedName] = useState(null)

  const handleSelectionChange = (newValue) => {
    setSelectedName(newValue)
  }

  const seatedFontStyles = {
    fontSize: '1.4em'
  }

  const qrCodeStyles = {
    maxWidth: '180px',
    maxHeight: '180px'
    // margin: '20px'
  }

  const welcomeStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.3em'
  }

  const paperStyles = {
    padding: 20,
    margin: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const searchStyles = {
    fontSize: '1.3em'
  }

  return (
    <div
      style={{
        margin: '0 2rem 0 2rem'
      }}
    >
      <Card>
        <Paper elevation={22} style={paperStyles}>
          {selectedName && (
            <div style={welcomeStyles}>
              <h2>
                Welcome, <div>{selectedName.name}</div>
              </h2>
            </div>
          )}
          {!selectedName && (
            <div style={searchStyles}>
              <p>
                Please begin typing your name below and <strong>select</strong>{' '}
                your name to locate your table
              </p>
              <SearchBox onSelectionChange={handleSelectionChange} />
            </div>
          )}
          {selectedName && (
            <div style={seatedFontStyles}>
              <p>You are seated at table {selectedName.table}</p>
            </div>
          )}
          {selectedName && (
            <div>
              <img style={qrCodeStyles} src={qrCode} alt="Seat Locator" />
              <p>
                Share this QR code with others to help them find their table
              </p>
              <Button
                variant="outlined"
                sx={{
                  color: 'inherit',
                  borderColor: 'inherit',
                  backgroundColor: 'inherit'
                }}
                onClick={
                  () => setSelectedName(null) // Reset the selected name
                }
              >
                New Search
              </Button>
            </div>
          )}
        </Paper>
      </Card>
      {/* <Footer /> */}
    </div>
  )
}

export default App
