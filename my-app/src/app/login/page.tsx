'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios, { Axios } from 'axios';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/users/login', user);
      console.log('Login success ', res.data);
      toast.success('Login success');
      router.push('/profile');
    } catch (err: any) {
      console.log('Signup failed ', err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py2">
      <h1>{loading ? 'Processing' : 'Login'}</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border border-gray-300 rounded-lg mv-4 focus:outline-none focus:border-gray-600 text-black"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border border-gray-300 rounded-lg mv-4 focus:outline-none focus:border-gray-600 text-black"
      />

      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg my-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? 'No login' : 'Login'}
      </button>
      <Link href="/signup">Don not have an account? Signup</Link>
    </div>
  );
}
