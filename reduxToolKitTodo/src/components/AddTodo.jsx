import React, { useState, useEffect, useRef} from 'react';
import { addTodo, editTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

export default function AddTodo({currentTodo, setCurrentTodo}) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const inputRef = useRef(null)

    useEffect(() => {
        if (currentTodo) {
            setInput(currentTodo.text); // Populate input with the current todo text
            inputRef.current.focus();
        } else {
            setInput(''); // Clear input when not editing
        }
    }, [currentTodo]); // Run this effect whenever currentTodo changes


    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentTodo){
            dispatch(editTodo({id : currentTodo.id, text : input}))
        }
        else {
            dispatch(addTodo(input));
        }

        setInput('');
        setCurrentTodo(null);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-3 mt-12">
            <input
                type="text"
                ref={inputRef}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-0 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-200 ease-in-out"
            >
                {currentTodo ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    );
}
