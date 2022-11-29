import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const addTodo = (todos) => {
	const inputElement = screen.getByPlaceholderText(/Add a new todo .../i);
	const buttonElement = screen.getByRole('button', { name: /Add Todo/i });
	todos.forEach((todo) => {
		fireEvent.change(inputElement, { target: { value: todo } });
		fireEvent.click(buttonElement);
	});
};

const deleteTodo = (todo) => {
	const todoElement = screen.getByText(todo);
	const todoElementContainer = todoElement.closest('div');
	const deleteButton = within(todoElementContainer).getByTestId('delete');
	fireEvent.click(deleteButton);
};

describe('App', () => {
	test('typing into input and displaying one todo', () => {
		render(<App />);
		const inputElement = screen.getByPlaceholderText(/Add a new todo .../i);
		const buttonElement = screen.getByRole('button', { name: /Add Todo/i });
		fireEvent.change(inputElement, {
			target: { value: 'Send a mail to Dad' },
		});
		fireEvent.click(buttonElement);
		const todoElement = screen.getByText(/Send a mail to Dad/i);
		expect(todoElement).toBeInTheDocument();
	});

	test('typing into input and displaying all todos', () => {
		render(<App />);
		addTodo(['Send a mail to Dad', 'Get some gifts for Bae']);
		const todoElements = screen.queryAllByTestId('todo');
		expect(todoElements.length).toBe(4);
	});

	test('if delete button is working', () => {
		render(<App />);
		addTodo(['Send a mail to Dad', 'Get some gifts for Bae']);
		deleteTodo('Send a mail to Dad');
		const todoElements = screen.queryAllByTestId('todo');
		expect(todoElements.length).toBe(3);
	});
});
