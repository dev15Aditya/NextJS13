'use client';

import React from 'react';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import Image from 'next/image';

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src={session.user.image!}
          alt={session.user.name!}
        />
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="block py-2 px-3 text-gray-900 rounded  dark:text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      Sign In
    </button>
  );
};

export default SigninButton;
