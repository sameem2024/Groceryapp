const SearchItem = ({SearchItem,setSearchItem}) => {
    return (
      <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
         
          <input
              type = "text"
              name = "search"
              placeholder='Search Item'
              value = {SearchItem}
              onChange = {(e)=> setSearchItem(e.target.value)}
          />
      </form>
    )
  }
  
  export default SearchItem