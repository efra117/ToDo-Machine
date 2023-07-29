import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue,SetNewTodoValue] = React.useState('');

    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        SetNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
            placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            />
          <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar  
            </button>
            <button
                className="TodoForm-button TodoForm-button--add"
            >Agregar
            </button>
          </div>

        </form>
    )
    }

export {TodoForm};