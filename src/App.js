import { useEffect,useState } from "react";
import Header from './components/Header'
import AddItems from './components/AddItems'
import SearchItem from './components/SearchItem'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [addItem,setaddItem] = useState('');
  const [searchItem,setSearchItem] = useState('');
  
  
  
  let [items,setItems] = useState(JSON.parse(localStorage.getItem('items')));

  useEffect(()=>{
    
    localStorage.setItem('items',JSON.stringify(items));
    console.log('triggered update');
    
  });


  const handleAddItem =  (value) => {
    if(!addItem) return;
    const length = items.length-1;
    const id = items.length ? Number(items[length].id)+1 : 1;
    const newItem = {id:id,name:value,checked:false};
    setaddItem('');
    items = [...items,newItem];
    setItems(items);
}

const handleCheck =  (id)=>{
    const listItems = items.map((item)=> item.id === id ? {...item,checked:!item.checked }:item);
    setItems(listItems);
    
}

const handleDelete =  (id) =>{
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
}
  return (
    <div className="App">
      <Header name={new Date().toLocaleString('default', { month: 'long' })}></Header>

      <AddItems 
      addItem = {addItem}
      setaddItem = {setaddItem}
      handleAddItem = {handleAddItem}
      />

      <SearchItem 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />

    <main>
        {items && items.length > 0 ?
          <Content 
            
            items = {items.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete} 
          />
          
        : <p style = {{color:'red'}}>No Items to display</p>
        
        }  
    </main>
      
    <Footer length = {items.length}/>

    </div>
  );
}

export default App;
