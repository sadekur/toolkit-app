"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function Page() {
  const userData = useSelector((data) => data.users);
  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Remove User Page
        </h1>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            User List
          </h2>
          {userData && userData.length > 0 ? (
            <ul className="space-y-2">
              {userData.map((user) => (
                <li
                  key={user.id}
                  className="flex justify-between items-center p-2 border rounded-md shadow-sm bg-gray-50 hover:bg-gray-100"
                >
                  <span className="text-gray-700 font-medium">{user.name}</span>
                  <button onClick={() => dispatch(removeUser(user.id))} className="text-red-500 hover:text-red-700 text-sm font-semibold">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">
              No users available. Please add users.
            </p>
          )}
        </div>
        <Link
          href="/"
          className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-medium"
        >
          Home
        </Link>
      </div>
    </>
  );
}
