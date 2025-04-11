import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const Todo = ({todo, removeTodo, editDone, getTodos}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.description || "—"}</td>
            <td>{formatDate(todo.date) || "—"}</td>
            <td>{todo.isDone ? "✅" : "❌"}</td>
            <td>
                <button className="btn btn-success" onClick={() => {
                    editDone(todo, true);
                }}>Выполнить
                </button>
                <button className="btn btn-warning" onClick={() => {
                    editDone(todo, false);
                }}>Отменить
                </button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => {
                    if (window.confirm("Вы уверены?")) {
                        removeTodo(todo);
                    }
                }}>Удалить
                </button>
            </td>
        </tr>
    );
};

export default Todo;
