'use client';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [['bold', 'italic', 'underline'], [{ list: 'bullet' }]],
  };

  const formats = ['bold', 'italic', 'underline', 'bullet'];

  const handleChange = (content) => {
    setEditorHtml(content);
  };

  return (
    <div className="text-gray-200 w-[350px]">
      <ReactQuill
        placeholder="Enter your comment..."
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={handleChange}
        style={{ height: '150px', border: 'none', color: '#fff' }}
      />
    </div>
  );
};

export default TextEditor;
