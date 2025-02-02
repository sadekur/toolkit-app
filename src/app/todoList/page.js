import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Todo List
        </h3>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add Todo"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
