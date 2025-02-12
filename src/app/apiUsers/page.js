"use client";
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiUsers } from '../redux/slice';

export default function page() {
    const dispatch = useDispatch();
    const users = useSelector((data) => data.usersData.userApiData);
    console.log(users);
  return (
    <div>
      <h1>API Users</h1>
      <button onClick={() => dispatch(fetchApiUsers())}>Fetch Users</button>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
      <br />
      <Link href="/">Home</Link>
    </div>
  )
}
