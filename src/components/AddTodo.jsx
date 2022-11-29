import { useState } from "react"

const AddTodo = ({ todos, addTodo }) => {
    const [todo, setTodo] = useState('')

    let newTodo = {
        id: todos.length + 1,
        text: todo,
        completed: false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setTodo('')
    }

    return (
        <div className="add-todo__container">
            <input type="text" className="add-todo__input" placeholder="Add a new todo ..." value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className="add-todo__button" onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}

export default AddTodo