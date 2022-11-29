import { MdRadioButtonChecked } from 'react-icons/md';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div className="todo__container" data-testid="todo">
            <div className="todo__checkbox" data-testid="toggle" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? <MdRadioButtonChecked className='icon checked' /> : <MdRadioButtonUnchecked className='icon' />}
            </div>
            <p className={todo.completed ? 'todo__text complete' : 'todo__text'}>{todo.text}</p>
            <div className="todo__delete" data-testid="delete" onClick={() => deleteTodo(todo.id)}>
                <AiOutlineDelete className='icon' />
            </div>
        </div>
    )
}

export default Todo