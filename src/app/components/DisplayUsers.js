import React from "react";

function DisplayUsers() {
	const users = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]; // Sample user data

	return (
		<div className="flex flex-col items-center justify-center py-10 px-6">
			<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
				<h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
					Display Users
				</h1>
				{/* <ul className="space-y-4">
					{users.map((user, index) => (
						<li
							key={index}
							className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition">
							<span className="text-gray-700 font-medium">
								{user}
							</span>
							<button className="text-red-500 font-semibold hover:text-red-700 transition">
								Remove
							</button>
						</li>
					))}
				</ul> */}
			</div>
		</div>
	);
}

export default DisplayUsers;
