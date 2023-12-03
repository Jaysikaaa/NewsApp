import React from 'react'

function Search({search, setSearch}) {

  const searchChangeHandler = (event) => {
    event.preventDefault()
    setSearch(event.target.value);
  }
  return (
   <section className='search-section'>
    <h2>News Articles</h2>
    <form>
        <div>
        <input type='text' placeholder='Search' value={search} onChange={searchChangeHandler}/>
        </div>
    </form>
   </section>
  )
}

export default Search
