"use client";
import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page() {
    const [todoList, setTodoList] = useState("");
    const dispatch = useDispatch();
    const todo = useSelector((data) => data.todosData.todos);
    console.log(todo);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Todo List
        </h3>
        <div className="flex items-center space-x-2">
          <input
            onChange={(e) => setTodoList(e.target.value)}
            type="text"
            placeholder="Add Todo"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={() => dispatch(addTodos(todoList))} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Add
          </button>
        </div>
        <div className="mt-4">
            <h5 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Todo List
            </h5>
            {todo.length && todo.map((item, index) => (
                <p key={index} className="text-gray-600">{item.name}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
