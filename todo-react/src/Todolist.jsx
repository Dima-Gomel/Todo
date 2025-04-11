import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, removeTodo, editDone }) => {
    // console.log("Полученные todos:", todos);
    if (!todos?.length) {
        return <h2 style={{textAlign: 'center'}}>Дела не найдены</h2>;
    }

    return (
        <div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                <tr className="table-success">
                    <th scope="col">Номер</th>
                    <th scope="col">Название</th>
                    <th scope="col">Описание</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Изменить статус</th>
                    <th scope="col">Удалить</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    editDone={editDone}
                />
            ))}
                </tbody>
            </table>
        </div>
    );
};

export default Todolist;
