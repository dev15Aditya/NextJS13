'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [theInput, setTheInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi I am chatbot! How can I help you today?',
    },
  ]);

  const callGetResponse = async () => {
    setIsLoading(true);
    let temp = messages.slice(); // Create a copy of messages

    temp.push({ role: 'user', content: theInput });
    setMessages(temp);
    setTheInput('');

    console.log('Calling AI for response...');

    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    const data = await response.json();

    const { output } = data;

    setMessages((prev) => [...prev, output]);

    setIsLoading(false);
  };

  const Submit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      callGetResponse();
    }
  };

  useEffect(() => {
    const chat = document.querySelector('.overflow-y-auto');
    chat?.scrollTo(0, chat.scrollHeight);
  });

  return (
    <main className="flex flex-col items-center justify-between md:px-24 py-4 md:py-5 h-screen overflow-y-hidden">
      <h1 className="text-3xl md:text-5xl font-sans mb-4">ChatBot🤖</h1>

      <div className="flex flex-col items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700 rounded-sm w-full md:w-[35rem] h-[90%] md:h-[85%]">
        <div className="flex flex-col gap-2 overflow-y-auto py-4 px-2 md:py-8 md:px-3 my-2 w-full h-[85%]">
          {messages.map((e, index) => (
            <div
              key={index}
              className={`w-max max-w-[18rem] rounded-md px-4 py-3 ${
                e.role === 'assistant'
                  ? 'self-start bg-gray-800 text-gray-50'
                  : 'self-end bg-blue-500 text-gray-50'
              }`}
            >
              {e.content}
            </div>
          ))}

          {isLoading && (
            <div className="self-start bg-gray-200 text-gray-800 w-max max-w-[18rem] rounded-md px-4 py-3">
              *thinking*
            </div>
          )}
        </div>

        <div className="relative w-[90%] bottom-3 flex justify-center">
          <textarea
            value={theInput}
            onChange={(event) => setTheInput(event.target.value)}
            className="w-[70%] md:w-[75%] h-10 px-3 py-2 resize-none overflow-y-auto text-black bg-gray-300 rounded-l outline-none"
            onKeyDown={Submit}
            placeholder="Type to start the conversation..."
          />
          <button
            onClick={callGetResponse}
            className="w-[30%] md:w-[25%] bg-blue-500 px-4 py-2 rounded-r"
          >
            send
          </button>
        </div>
      </div>

      <div></div>
    </main>
  );
}
