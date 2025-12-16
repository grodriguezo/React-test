import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
       
        <h2>Hola <strong>Gustavo</strong><br/>
        Has creado {completed} de {total} tareas</h2>
    );
}
export { TodoCounter };