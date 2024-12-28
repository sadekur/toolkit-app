import React from "react";

function AddUsers() {
	return (
		<div className="flex flex-col items-center mt-20 justify-center p-0">
			<div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
				<h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
					Add Users
				</h1>
				<input
					type="text"
					placeholder="Enter user name"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
				/>
				<button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300">
					Add User
				</button>
			</div>
		</div>
	);
}

export default AddUsers;
