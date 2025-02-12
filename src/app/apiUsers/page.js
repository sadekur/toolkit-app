"use client";
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiUsers } from '../redux/slice';

export default function Page() {
    const dispatch = useDispatch();
    const users = useSelector((data) => data.usersData.userApiData);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    API Users
                </h1>
                
                <button 
                    onClick={() => dispatch(fetchApiUsers())} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full"
                >
                    Fetch Users
                </button>

                {/* Users List */}
                <div className="mt-6 space-y-4">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                                <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-gray-500">{user.phone}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No users found. Click the button above to fetch data.</p>
                    )}
                </div>

                {/* Home Link */}
                <div className="mt-6 text-center">
                    <Link href="/">
                        <span className="text-blue-500 hover:underline">Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
