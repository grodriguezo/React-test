import React from "react";
import {CompletedIcon} from '../CompletedIcon'
import {DeleteIcon} from '../DeleteIcon'

function TodoItem({ text, completed, onToggleCompleted, onToggleDeleted }) {

  return (

    <tbody>
      <tr>
        <td>
 <CompletedIcon onClick={onToggleCompleted}/>
        </td>
       
         <td style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</td>
        <td><DeleteIcon onClick={onToggleDeleted}/></td>
      {/*  <td><button className="chulito-btn" onClick={onToggleCompleted}>Marcar Leido </button></td>
        <td style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</td>
        <td><button className="btn-eliminar" onClick={onToggleDeleted}>Eliminar</button></td>*/}
      </tr>
    </tbody>
  );
}
export { TodoItem };