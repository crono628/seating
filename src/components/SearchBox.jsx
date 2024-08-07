import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { tables } from '../data/guestList'

const SearchBox = ({ onSelectionChange }) => {
  const options = tables
  return (
    <Autocomplete
      id="search-box"
      options={options}
      getOptionLabel={(option) => option.name}
      style={{ width: '100%', backgroundColor: 'white' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter your name here"
          variant="outlined"
        />
      )}
      onChange={(event, newValue) =>
        onSelectionChange(
          //store name and table in an object
          newValue
            ? {
                name: newValue.name,
                table: newValue.table
              }
            : null
        )
      }
    />
  )
}

export default SearchBox
