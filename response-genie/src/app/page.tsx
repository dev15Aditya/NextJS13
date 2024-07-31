'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex h-[84vh] flex-col items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg backdrop:">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h2>
        <p className="text-lg text-gray-700">
          Sign in to unlock the magic. Gain access to exclusive features and
          personalized content by signing in with your account. Experience a
          seamless journey tailored just for you. Let&apos;s make your
          experience extraordinary – sign in now and let the magic begin!
        </p>
      </div>
    </main>
  );
}
