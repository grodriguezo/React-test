function TodoSearch({searchTerm,setSearchTerm}){

const handleSearchChange = (event) =>{
    setSearchTerm(event.target.value)
  };
  
  return(
   <input 
   placeholder="Buscar tarea"
   value={searchTerm}
   onChange={handleSearchChange}/>
  );
}
export {TodoSearch};