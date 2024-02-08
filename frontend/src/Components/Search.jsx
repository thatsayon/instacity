import React from 'react'
import useShareobj from '../CustomHooks/useShareobj'

function Search() {
  const {user} = useShareobj();

  console.log(user)
  return (
    <div>Search</div>
  )
}

export default Search