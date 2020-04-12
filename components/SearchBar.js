import React from 'react'
import history from '../history'

const SearchBar = () => {
  const submitAction = (e) => {
    e.preventDefault()
    history.push(`/Search/${input.value}`)
    input.value = ''
  }

  let input
  return (
    <form className="form-inline" onSubmit={submitAction}>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Free Assets..." 
        ref={(node) => input = node} 
      />
      <input type="submit" className="btn btn-outline-success ml-1" value="Search" />
    </form>
  )
}

export default SearchBar