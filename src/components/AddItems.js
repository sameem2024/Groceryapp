import {FaPlus} from 'react-icons/fa';

const AddItems = ({addItem,setaddItem,handleAddItem}) => {
  return (
    <form className='addForm' onSubmit={(e)=> e.preventDefault()}>

        <input 
            id = "addItem"
            type ="text" 
            autoFocus
            placeholder='Add Item'
            value = {addItem}
            onChange={(e)=>setaddItem(e.target.value)}
           
        />

        <button 
          onClick={()=> handleAddItem(addItem)}
          type="submit"
          aria-label = "Add Item">
          <FaPlus />
        </button>

    </form>
  )
}

export default AddItems