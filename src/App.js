import { useState } from 'react';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
	const [todos, setTodos] = useState([
		{ id: 2, text: 'Visit the mall to get laptop charger', completed: false },
		{
			id: 1,
			text: 'Get a new shoe at the store for tomorrows event',
			completed: true,
		},
	]);

	const addTodo = (newTodo) => {
		setTodos([newTodo, ...todos]);
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	return (
		<div className="container">
			<h1 className="center">Todo's</h1>
			<AddTodo todos={todos} addTodo={addTodo} />
			<Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
