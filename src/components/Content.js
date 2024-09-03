import ItemLists from './ItemLists';

const Content = ({items,handleCheck,handleDelete}) => {
  

  return (

  <>
    
     {items.length ? (
      <ItemLists

            items = {items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
      />
     ): (
      <p style={{marginTop:'2rem'}}>No Items found</p>
     )}
    
  </>
   
  )
}

export default Content