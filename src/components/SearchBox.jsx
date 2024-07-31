import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { tables } from '../data/guestList'

const SearchBox = () => {
  const handleSearch = (event, value) => {
    console.log(value)
  }

  return (
    <Autocomplete
      options={tables}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
      onChange={handleSearch}
    />
  )
}
export default SearchBox
