# PDF Chatbot

## Overview

Build a chatbot that can interact with any PDF file!

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Langchain
- Vercel's AI SDK

## Prerequisites

- Node.js (LTS version)
- OpenAI API Key
- Pinecone Account (for vector storage)

## Setup

1. **Clone Repository:**
   `git clone https://github.com/dev15Aditya/NextJS13`

2. **Install Dependencies:**
   cd pdf-chatbot
   npm install

3. **Create Environment Variables:**
   Create a `.env.local` file in the root directory and add the following variables:
   PINECONE_API_KEY="Your Pinecone API Key"
   PINECONE_INDEX_NAME="Your Pinecone Index Name"
   OPENAI_API_KEY="Your OpenAI API Key"

4. **Signup for Pinecone:**

- Go to [Pinecone](https://pinecone.io/) and sign up for a free-tier starter account.
- Create an index with the desired name and dimensions.

## Usage

- Upload any PDF file using the drag-and-drop feature.
- Once uploaded, the chatbot will be trained on the content of the PDF.
- Enter your query in the prompt box and receive responses from the chatbot.

## Folder Structure

- `/api/addData`: Route for training the chatbot with PDF files.
- `/api/chat`: Route for interacting with the chatbot.
- `/src/app/globals.css`: Global CSS styles.
- `/src/pages/index.tsx`: Homepage containing the chat interface.
- `/src/layout.tsx`: Layout component with metadata.

## Credits

- [Next.js](https://nextjs.org/)
- [Langchain](https://github.com/langchain)
- [Vercel AI](https://vercel.ai/)

## License

This project is licensed under the [MIT License](LICENSE).
