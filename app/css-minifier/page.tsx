'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { minify } from 'csso';

export default function CssMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleMinify = () => {
    try {
      setError('');
      const result = minify(input);
      setOutput(result.css || 'Error minifying CSS');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">CSS Minifier</h2>
      <TextArea
        placeholder="Paste your CSS code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="mt-4">
        <Button label="Minify CSS" onClick={handleMinify} />
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
