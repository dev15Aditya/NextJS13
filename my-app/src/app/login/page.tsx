'use client';
import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py2">
      <h1>{loading ? 'Processing' : 'Login'}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        className="p-2 border border-gray-300 rounded-lg mv-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="p-2 border border-gray-300 rounded-lg mv-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <button className="p-2 border border-gray-300 rounded-lg my-4 focus:outline-none focus:border-gray-600">
        Login
      </button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  );
}
