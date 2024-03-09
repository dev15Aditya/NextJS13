'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useCompletion } from 'ai/react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  // When a file is dropped in the dropzone, call the `/api/addData` API to train our bot on a new PDF File
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF');
      // alert('Please upload a PDF');
      return;
    }

    const formData = new FormData();
    formData.set('file', file);

    const response = await fetch('/api/addData', {
      method: 'POST',
      body: formData,
    });

    const body = await response.json();

    if (body.success) {
      toast.success('Data added successfully');
      // alert('Data added successfully');
    }
  }, []);

  // Configure react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  // Vercel AI hook for generating completions through an AI model
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: '/api/chat',
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-2 md:p-5">
      <Toaster />
      <h1 className="text-xl font-mono mb-8 mt-5 text-center max-w-[320px]  ">
        Chatbot that can intelligently engage with any PDF
      </h1>
      <div
        {...getRootProps({
          className:
            'dropzone bg-gray-900 border border-gray-800 p-5 rounded-md hover:bg-gray-800 transition-colors duration-200 ease-in-out cursor-pointer',
        })}
      >
        <input {...getInputProps()} />
        <p>Upload a PDF to add new data</p>
      </div>

      <div className="mx-auto w-full items-center max-w-md py-10 flex flex-col stretch">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className=" w-full max-w-md text-black border border-gray-300 rounded shadow-xl p-2"
            value={input}
            placeholder="Enter your prompt..."
            onChange={handleInputChange}
          />

          <button
            disabled={isLoading}
            type="submit"
            className={`py-2 border rounded-lg bg-gray-900 text-sm px-6 ${
              isLoading ? 'cursor-wait' : 'cursor-pointer'
            }`}
          >
            Submit
          </button>

          <p className="text-left">
            <strong>Completion result</strong> :{' '}
            {completion === '' ? 'Thinking...' : completion}
          </p>
        </form>
      </div>
    </main>
  );
}
