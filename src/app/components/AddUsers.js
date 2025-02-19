"use client";
import React, { useState } from "react";
import { AddUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

function AddUsers() {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const userDispatch = () => {
		dispatch(AddUser({name}));
	};

	return (
		<div className="flex flex-col items-center mt-20 justify-center p-0">
			<div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
				<h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
					Add Users
				</h1>
				<input
					type="text"
					placeholder="Enter user name"
					onChange={(e) => setName(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
				/>
				<button
					onClick={userDispatch}
					className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300">
					Add User
				</button>
				<Link href="/removeUser" className="text-blue-500 hover:text-blue-700 mt-4">Remove User</Link>
				<br />
				<Link href="/todoList" className="text-blue-500 hover:text-blue-700 mt-4">Todo List</Link>
				<br />
				<Link href="/apiUsers" className="text-blue-500 hover:text-blue-700 mt-4">API Users</Link>
			</div>
		</div>
	);
}

export default AddUsers;
