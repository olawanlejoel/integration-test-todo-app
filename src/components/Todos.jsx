import Todo from "./Todo"

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div className="all-todos__container">
            <h2>{todos.length} {todos.length > 1 ? 'Todos' : 'Todo'}</h2>
            {todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </div>
    )
}

export default Todos