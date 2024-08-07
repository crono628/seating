import React, { useState } from 'react'
import SearchBox from './components/SearchBox' // Adjust the import path as necessary
import { Button, Card, Link, Paper } from '@mui/material'
import './App.css'
import qrCode from './assets/seatLocator.png'
import './firebase'

const App = () => {
  const [selectedName, setSelectedName] = useState(null)

  const handleSelectionChange = (newValue) => {
    setSelectedName(newValue)
  }

  return (
    <>
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
              <p>You are seated at table {selectedName.table}</p>
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
      <footer className="footer">
        <Link
          href="https://michaeldesantis.com/"
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          md ©2024
        </Link>
      </footer>
    </>
  )
}

export default App
