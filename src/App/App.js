
import React from 'react';
import { TodoCounter } from '../TodoCounter/Index';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { CreateTodoButton } from '../CreateTodoButton/Index';
import { TodoItem } from '../TodoItem/Index';
import { IndexPicture } from '../IndexPicture/index';
import { SideBar } from '../SideBarCreateToDo/Index';
import './App.css';
import { useLocalStorage } from './useLocalStorage';
import { TodosLoading } from '../TodosLoading/Index';
import {TodoError} from '../TodoError/Index';
import { TodoAddTask } from '../TodoAddTask/Index';



function App() {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const {item:todosText, saveTodo,loading,error} = useLocalStorage('TODOS_V1', []);
  const [searchTerm, setSearchTerm] = React.useState('');
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleAddTodo = (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    const newTodos = [
      ...todosText,
      { text: trimmedText, completed: false }
    ];

    saveTodo(newTodos);
  };

  const handleToggleCompleted = (text) => {
    const newTodos = todosText.map(todo =>
      todo.text === text
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    saveTodo(newTodos);
  };
  const filteredData = todosText.filter(
    item => item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleDeleted = (text) => {
    const newTodos = [...todosText];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  }

  return (
    <>
      <div className='app-container'>
        <IndexPicture />
        <CreateTodoButton onClick={toggleSideBar} />
        <TodoCounter completed={todosText.filter(todo => todo.completed).length} total={todosText.length} />
        <SideBar isOpen={isSideBarOpen} onClose={toggleSideBar} onAddTodo={handleAddTodo} />
        <TodoSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <TodoList>

          {loading && <TodosLoading/>}
          {error && <TodoError/>}
          {(!loading && searchTerm.length == 0 && filteredData.length == 0) && <TodoAddTask/>}
          { filteredData.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onToggleCompleted={() => handleToggleCompleted(todo.text)}
              onToggleDeleted={() => handleToggleDeleted(todo.text)} />
          ))}
        </TodoList>
      </div>
    </>
  );
}

export default App;
