'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async function fetchEmails() {
      const response = await fetch('/api/email');
      const messages = await response.json();
      console.log('Emails: ', messages);
    }

    fetchEmails();
  }, []);
  return (
    <section className="bg-transparent text-white py-12">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-28">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">Email Fetching</h3>
            <p className="text-gray-300">
              Effortlessly fetch incoming emails from your designated mailbox.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">
              AI Response Generation
            </h3>
            <p className="text-gray-300">
              Utilize cutting-edge AI technology to generate personalized and
              contextually relevant responses.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">Automated Reply</h3>
            <p className="text-gray-300">
              Streamline your workflow with automated replies, saving time and
              ensuring prompt responses to your users.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">
              Customizable Settings
            </h3>
            <p className="text-gray-300">
              Tailor the tool to your specific needs with customizable settings,
              allowing you to fine-tune the response generation process.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
            <p className="text-gray-300">
              Gain insights into email interaction patterns and response
              effectiveness with our intuitive analytics dashboard.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">Integration Options</h3>
            <p className="text-gray-300">
              Seamlessly integrate with your existing email service provider and
              workflow tools for enhanced efficiency.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">
              Multi-platform Support
            </h3>
            <p className="text-gray-300">
              Access the tool from anywhere, with support for multiple platforms
              including desktop and mobile devices.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 rounded-lg p-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-neutral-800/30">
            <h3 className="text-xl font-semibold mb-4">Security and Privacy</h3>
            <p className="text-gray-300">
              Rest assured with robust security measures in place to protect
              your data and ensure user privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
