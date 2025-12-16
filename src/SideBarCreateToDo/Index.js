import React from "react";
import './SideBarCreateToDo.css'

const SideBar = ({ isOpen, onClose, onAddTodo }) => {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const handleAdd = () => {
        onAddTodo(newTodoValue);
        setNewTodoValue('');
        onClose();

    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose} >&times;</button>
            <h2>Vamos a crear una tarea</h2>
            <ul>
                <li><a>Ingresa la tarea</a></li>
                <input
                    type="text"
                    placeholder="Agregar tarea"
                    value={newTodoValue}
                    onChange={(e) => setNewTodoValue(e.target.value)}
                    onKeyDown={handleKeyDown} />

                <button className="add-btn" onClick={handleAdd}>Agregar</button>
            </ul>
        </div>
    )
}
export { SideBar }