import React from 'react'

const Search = ({searchAtr, searchHandler}) => {

  return (
    <>
      <input 
        type="text" 
        placeholder='Effectuer votre recherche..'
        value={searchAtr} 
        onChange={searchHandler}
        className="m-3"
      />
    </>
  )
}

export default Search