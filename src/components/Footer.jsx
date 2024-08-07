import React from 'react'
import { Link } from '@mui/material'

export const Footer = () => {
  return (
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
  )
}
