import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { tables } from '../data/guestList'

const SearchBox = () => {
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
    <>
      <Autocomplete
        id="search-box"
        options={options}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
      />
    </>
  )
}
export default SearchBox
