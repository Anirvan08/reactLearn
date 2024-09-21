import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../features/todo/todoSlice';
import AddTodo from './AddTodo';
import { useState } from 'react';

export default function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Todos</h2>
      <AddTodo currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      <ul className="space-y-3 mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm transition duration-200 hover:bg-gray-200">
            <span className={`text-lg ${todo.complete ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {todo.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch(toggleComplete(todo.id))}
                className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
                aria-label={todo.complete ? 'Undo' : 'Complete'}
              >
                {todo.complete ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => handleEdit(todo)}
                className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-600 hover:text-red-800 font-semibold transition duration-200"
                aria-label="Delete Todo"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
