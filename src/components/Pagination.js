import React from 'react'

function Pagination({page, setPage}) {
    const prevClickHandler = () => {
setPage(prev => prev - 1)
    }
    const nextClickHandler = () => {
setPage(prev => prev + 1)
    }
  return (
    <div className='page' >
      <button onClick={prevClickHandler}>Prev</button>
      <span></span>
      <button onClick={nextClickHandler}>Next</button>
    </div>
  )
}

export default Pagination
