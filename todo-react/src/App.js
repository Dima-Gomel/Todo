import Todolist from "./Todolist";
import axios from "axios";
import {useState} from "react";
import AddTodo from "./AddTodo";

const API_URL = 'http://127.0.0.1:8000/api/todos/';

function App() {
    const [todos, setTodos] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentUrl, setCurrentUrl] = useState(API_URL);

    async function getTodos(url=API_URL) {
        try {
            const response = await axios.get(url);
            setTodos(response.data.results);

            const next = response.data.next;
            const prev = response.data.previous;

            setNextUrl(next ? next : null);
            setPrevUrl(prev ? prev : null);
            setCurrentUrl(url);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    }


    const removeTodo = async (todo) => {
        try {
            await axios.delete(`${API_URL}${todo.id}/`);
            setTodos(todos.filter(t => t.id !== todo.id));
        } catch (error) {
            console.error("Ошибка при удалении:", error);
        }
    };

    const editDone = async (todo, isDone) => {
        try {
            await axios.patch(`${API_URL}${todo.id}/`, {isDone});
            const updatedTodos = todos.map(t =>
                t.id === todo.id ? {...t, isDone} : t
            );
            // console.log("Обновлённый список:", updatedTodos);
            setTodos(updatedTodos);
        } catch (error) {
            console.error("Ошибка при обновлении:", error);
        }
    };

    const createTodo = async (newTodo) => {
        try {
            const response = await axios.post(API_URL, newTodo);
            setTodos([...todos, ...response.data]);
            getTodos(currentUrl);
        } catch (error) {
            console.error("Ошибка при создании:", error);
        }
    };

    return (<div className="App">
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => getTodos(API_URL)}>
            Обновить список дел
        </button>
        <AddTodo createTodo={createTodo}/>
        <h1 style={{textAlign: 'center'}}>
            <strong>Список наших дел</strong>
        </h1>
        <Todolist
            todos={todos}
            removeTodo={removeTodo}
            editDone={editDone}
        />
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px'}}>
            <button
                className="btn btn-secondary"
                onClick={() => getTodos(prevUrl)}
                disabled={!prevUrl}
                >
                Назад
        </button>

        <button
            className="btn btn-secondary"
            onClick={() => getTodos(nextUrl)}
            disabled={!nextUrl}
        >
            Вперёд
        </button>

    </div>
</div>)
    ;
}

export default App;
