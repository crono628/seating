import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { tables } from '../data/guestList'

const SearchBox = ({ onSelectionChange }) => {
  // create an array of unique names from tables object
  function transformTablesToOptions(tables) {
    const nameSet = new Set()
    for (const table in tables) {
      if (tables.hasOwnProperty(table)) {
        tables[table].forEach((name) => {
          nameSet.add(name)
        })
      }
    }
    // Convert the Set to an array of objects with a label property
    return Array.from(nameSet).map((name) => ({ label: name }))
  }

  const options = transformTablesToOptions(tables)
  console.log(options)
  return (
    <Autocomplete
      id="search-box"
      options={options}
      getOptionLabel={(option) => option.label}
      style={{ width: 300, backgroundColor: 'white' }}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
      onChange={(event, newValue) =>
        onSelectionChange(
          //store name and table in an object
          newValue
            ? {
                name: newValue.label,
                table: Object.keys(tables).find((table) =>
                  tables[table].includes(newValue.label)
                )
              }
            : null
        )
      }
    />
  )
}

export default SearchBox
