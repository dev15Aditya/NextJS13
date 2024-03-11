'use client';
import { useSession } from 'next-auth/react';
import SigninButton from './components/SigninButton';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <h1 className="text-4xl font-bold">Welcome to MailGienie</h1>
      <p className="text-lg">
        MailGienie is a simple email client to manage your emails.
      </p>

      <SigninButton />
    </main>
  );
}
