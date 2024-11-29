import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // Load JavaScript syntax

interface CodeHighlighterProps {
  code: string;
  language?: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

export default function CodeHighlighter({
  code,
  language = "javascript",
  editable = false,
  onChange,
}: CodeHighlighterProps) {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  if (editable) {
    return (
      <textarea
        value={code}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring"
        rows={10}
      />
    );
  }

  return (
    <pre className="rounded-lg bg-gray-900 p-4 overflow-auto">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
