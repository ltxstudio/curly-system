"use client";

import { useState } from "react";
import { minify } from "terser";
import CodeHighlighter from "../components/CodeHighlighter";
import { FiDownload, FiMinimize2 } from "react-icons/fi";

export default function HomePage() {
  const [inputCode, setInputCode] = useState("");
  const [minifiedCode, setMinifiedCode] = useState("");
  const [error, setError] = useState("");

  const handleMinify = async () => {
    try {
      const result = await minify(inputCode);
      setMinifiedCode(result.code || "");
      setError("");
    } catch (err: any) {
      setError(err.message);
      setMinifiedCode("");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([minifiedCode], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "minified.js";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">JavaScript Minifier</h1>
        <p className="text-gray-600 mt-2">
          Quickly optimize and compress your JavaScript code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Code Editor */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <CodeHighlighter
            code={inputCode}
            editable
            onChange={setInputCode}
          />
          <p className="text-sm text-gray-500 mt-2">
            Characters: {inputCode.length}
          </p>
        </div>

        {/* Minified Code Display */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 border">
          <CodeHighlighter code={minifiedCode} />
          <p className="text-sm text-gray-500 mt-2">
            Characters: {minifiedCode.length}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleMinify}
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
        >
          <FiMinimize2 className="mr-2" />
          Minify Code
        </button>
        <button
          onClick={handleDownload}
          disabled={!minifiedCode}
          className={`flex items-center ${
            minifiedCode
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 cursor-not-allowed"
          } text-white px-6 py-3 rounded-lg shadow-lg transition`}
        >
          <FiDownload className="mr-2" />
          Download Code
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-600 border border-red-300 p-4 rounded-lg mt-4 text-center">
          {error}
        </div>
      )}
    </div>
  );
}
