'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { minify } from 'terser';

export default function JsMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleMinify = async () => {
    try {
      setError('');
      const result = await minify(input);
      setOutput(result.code || 'Error minifying code');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">JavaScript Minifier</h2>
      <TextArea
        placeholder="Paste your JavaScript code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="mt-4">
        <Button label="Minify JS" onClick={handleMinify} />
      </div>
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      <h3 className="text-lg font-medium text-gray-800 mt-6">Minified Output</h3>
      <TextArea
        placeholder="Minified code will appear here..."
        value={output}
        onChange={() => {}}
        readOnly
      />
    </Layout>
  );
}
