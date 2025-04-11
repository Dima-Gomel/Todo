import React, {useState} from "react";


const AddTodo = ({ createTodo }) => {
    const [todo, setTodo]= useState({title: '', description: ''});

    return (
        <form>
            <input
                value={todo.title}
                onChange={e => setTodo({...todo, title: e.target.value})}
                type='text'
                placeholder='Название задачи'
            />
            <input
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
                type='text'
                placeholder='Описание задачи'
            />
            <button
                onClick={e => {
                    e.preventDefault();
                    createTodo(todo);
                    setTodo({title: '', description: ''});
                }}
                type='submit'
            >
                Добавить
            </button>
        </form>
    )
}

export default AddTodo;
